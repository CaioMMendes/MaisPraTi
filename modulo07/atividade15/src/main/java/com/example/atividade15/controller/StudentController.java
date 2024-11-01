package com.example.atividade15.controller;

import com.example.atividade15.model.Student;
import com.example.atividade15.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alunos")
public class StudentController {

  @Autowired
  private StudentService studentService;

  @PostMapping
  public ResponseEntity<Student> createStudent(@RequestBody Student student) {
    Student createdStudent = studentService.createStudent(student);
    return ResponseEntity.ok(createdStudent);
  }

}
