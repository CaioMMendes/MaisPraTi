package com.example.atividade15.service;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

  @Autowired
  private CourseRepository courseRepository;

  public Course createCourse(Course course) {
    return courseRepository.save(course);
  }

}
