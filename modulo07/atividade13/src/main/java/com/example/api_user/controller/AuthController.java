package com.example.api_user.controller;

import com.example.api_user.dto.LoginDTO;
import com.example.api_user.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
//  private final UserDetailsService userDetailsService;

  public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
//    this.userDetailsService = userDetailsService;
  }


  @PostMapping("/login")
//  public ResponseEntity<String> login(@RequestBody String username, @RequestBody String user_password) {
//  public ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
  public ResponseEntity<String> login(@RequestBody LoginDTO loginDto) {
//    String username = loginData.get("username");
//    String user_password = loginData.get("user_password");

    String username=loginDto.getUsername();
    String user_password=loginDto.getUser_password();

    try {
      Authentication authentication = authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(username, user_password)
//          new UsernamePasswordAuthenticationToken(username, user_password)
      );

      UserDetails user = (UserDetails) authentication.getPrincipal();
      return ResponseEntity.ok(jwtTokenProvider.generateToken(user));
    } catch (AuthenticationException error) {
      System.out.println(error);
      throw new RuntimeException("Invalid Credentials");
    }
  }

}
