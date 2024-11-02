package com.example.atividade15.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Course {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String name;
  private String description;

  @ManyToMany(mappedBy = "courses")
  private Set<Student> students = new HashSet<>();
}
