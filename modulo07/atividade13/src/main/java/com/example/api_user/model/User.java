package com.example.api_user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.GenerationType;
import lombok.Data;


@Entity
@Table(name="users")
@Data
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column (nullable=false)
  private String username;
  @Column (nullable=false)
  private String email;
  @Column (nullable=false)
  private String user_password;


}
