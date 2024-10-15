package com.example.api_user.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class GeneratePassword {

  public static String generatePasswordHash(String rawPassword) {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    String encodedPassword = passwordEncoder.encode(rawPassword);
    System.out.println("Senha criptografada: " + encodedPassword);
return encodedPassword;
  }
}
