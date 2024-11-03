package com.example.atividade15.controller;

import com.example.atividade15.dto.CourseDTO;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cursos")
public class CourseController {

  @Autowired
  private CourseService courseService;

  @PostMapping
  public ResponseEntity<Course> createCourse(@RequestBody Course course) {
    Course returnedCourse = courseService.createCourse(course);
    return ResponseEntity.ok(returnedCourse);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Course> getCourseById(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    Course returnedCourse = courseService.getCourseById(longId);
    return ResponseEntity.ok(returnedCourse);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Course> updateCourse(@PathVariable String id, @RequestBody CourseDTO courseDTO) {
    Long longId = Long.parseLong(id);
    Course returnedCourse = courseService.updateCourse(longId, courseDTO);
    return ResponseEntity.ok(returnedCourse);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCourse(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    courseService.deleteCourse(longId);
    return ResponseEntity.status(204).build();
  }

  @GetMapping("/{id}/alunos")
  public ResponseEntity<List<Student>> getAllCourseCourses(@PathVariable String id) {
    Long longId = Long.parseLong(id);
    List<Student> returnedCourse = courseService.getAllCourseCourses(longId);
    return ResponseEntity.ok(returnedCourse);
  }

  @GetMapping("/name/{name}")
  public ResponseEntity<Course> getCoursesByName(@PathVariable String name) {
    Course returnedCourse = courseService.getCoursesByName(name);
    return ResponseEntity.ok(returnedCourse);
  }

}
