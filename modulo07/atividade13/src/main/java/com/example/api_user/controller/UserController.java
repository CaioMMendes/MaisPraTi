package com.example.api_user.controller;

import com.example.api_user.dto.UserDTO;
import com.example.api_user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping
  public List<UserDTO> getAllUsers(){
      return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id){
      UserDTO userDTO=userService.getUSerById(id);
      return userDTO!=null?ResponseEntity.ok(userDTO):ResponseEntity.notFound().build();
    }

  @PostMapping()
  public UserDTO createUser(@RequestBody UserDTO userDTO){

    return userService.createUser(userDTO);
  }

@PutMapping("/{id}")
public ResponseEntity<UserDTO> updateUser(@PathVariable int id,@RequestBody UserDTO userDTO){
  UserDTO updatedUser=userService.updateUser(id,userDTO);
  return updatedUser!=null?ResponseEntity.ok(updatedUser):ResponseEntity.notFound().build();
}



@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable int id){
      userService.deleteUser(id);
      return ResponseEntity.noContent().build();
}


}
