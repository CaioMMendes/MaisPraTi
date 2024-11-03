package com.example.atividade15.controller;

import com.example.atividade15.dto.CourseDTO;
import com.example.atividade15.dto.StudentDTO;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.service.CourseService;
import com.example.atividade15.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
public class StudentController {

  @Autowired
  private StudentService studentService;

  @Autowired
  private CourseService courseService;

  @PostMapping
  public ResponseEntity<Student> createStudent(@RequestBody Student student) {
    Student createdStudent = studentService.createStudent(student);
    return ResponseEntity.ok(createdStudent);
  }



  @GetMapping("/{id}")
  public ResponseEntity<Student> getStudentById(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    Student returnedStudent = studentService.getStudentById(longId);
    return ResponseEntity.ok(returnedStudent);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody StudentDTO studentDTO) {
    Long longId = Long.parseLong(id);
    Student returnedStudent = studentService.updateStudent(longId, studentDTO);
    return ResponseEntity.ok(returnedStudent);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    studentService.deleteStudent(longId);
    return ResponseEntity.status(204).build();
  }

  @GetMapping("/{id}/cursos")
  public ResponseEntity<List<Course>> getAllStudentStudents(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    List<Course> returnedStudent = studentService.getAllStudentCourses(longId);
    return ResponseEntity.ok(returnedStudent);
  }

  @GetMapping("/email/{email}")
  public ResponseEntity<Student> getStudentsByEmail(@PathVariable String email) {
    Student returnedStudent = studentService.getStudentsByEmail(email);
    return ResponseEntity.ok(returnedStudent);
  }


  @PostMapping("/{id}/cursos/{cursoId}")
  public ResponseEntity<String> enrollStudentInCourse(@PathVariable String studentId, @PathVariable String courseId) {
    Long longStudentId = Long.parseLong(studentId);
    Long longCourseId = Long.parseLong(courseId);
    studentService.enrollStudentInCourse(longStudentId, longCourseId);
    return ResponseEntity.ok("Aluno matriculado no curso com sucesso!");
  }

  @DeleteMapping("/{studentId}/cursos/{courseId}")
  public ResponseEntity<Void> removeStudentFromCourse(@PathVariable String courseId, @PathVariable String studentId) {
    Long longStudentId = Long.parseLong(studentId);
    Long longCourseId = Long.parseLong(courseId);
    studentService.removeStudentFromCourse(longCourseId, longStudentId);
    return ResponseEntity.noContent().build();


  }
}
