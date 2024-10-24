package com.example.api_user.controller;

import com.example.api_user.dto.UpdateUserDTO;
import com.example.api_user.dto.UserDTO;
import com.example.api_user.security.CustomUserDetails;
import com.example.api_user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping
  public List<UserDTO> getAllUsers() {
    CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Integer userId = userDetails.getUserId();
    String username = userDetails.getUsername();
    return userService.getAllUsers();
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
    UserDTO userDTO = userService.getUSerById(id);
    return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
  }

  @PostMapping()
  public UserDTO createUser(@RequestBody UserDTO userDTO) {
    return userService.createUser(userDTO);
  }

  @PutMapping()
  public ResponseEntity<UserDTO> updateUser(@RequestBody UpdateUserDTO updateUserDto) {
    UserDTO updatedUser = userService.updateUser(updateUserDto);
    return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
  }

  @DeleteMapping()
  public ResponseEntity<Void> deleteUser() {
    userService.deleteUser();
    return ResponseEntity.noContent().build();
  }

}
