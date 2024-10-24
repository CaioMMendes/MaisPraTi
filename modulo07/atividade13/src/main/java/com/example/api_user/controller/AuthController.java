package com.example.api_user.controller;

import com.example.api_user.dto.LoginDTO;
import com.example.api_user.dto.UserDTO;
import com.example.api_user.security.JwtTokenProvider;
import com.example.api_user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;

  @Autowired
  private UserService userService;

  public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody LoginDTO loginDto) {
    String username = loginDto.getUsername();
    String user_password = loginDto.getUser_password();
    try {
      Authentication authentication = authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(username, user_password)
      );
      UserDTO userDTO = userService.getUserByUsername(username);
      return ResponseEntity.ok(jwtTokenProvider.generateToken(userDTO.getUsername(), userDTO.getId()));
    } catch (AuthenticationException error) {
      System.out.println(error);
      throw new RuntimeException("Invalid Credentials");
    }
  }

}
