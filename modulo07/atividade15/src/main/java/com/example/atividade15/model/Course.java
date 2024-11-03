package com.example.atividade15.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString(exclude = "students")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Course {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @EqualsAndHashCode.Include
  private Long id;

  @Column(unique = true)
  private String name;
  private String description;

  @ManyToMany(mappedBy = "courses")
  @JsonIgnoreProperties("courses")
  private Set<Student> students = new HashSet<>();
}
