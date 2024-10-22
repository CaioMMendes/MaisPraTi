package com.example.api_user.dto;

import lombok.Data;

@Data
public class UpdateUserDTO {
  private String username;
  private String email;
  private String user_password;
}
