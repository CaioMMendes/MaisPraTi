package com.example.atividade15.service;

import com.example.atividade15.dto.CourseDTO;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

  @Autowired
  private CourseRepository courseRepository;

  public Course createCourse(Course course) {
    return courseRepository.save(course);
  }


  public Course getCourseById(Long id) {
    return courseRepository.findById(id).orElse(null);
  }

  public Course updateCourse(Long id, CourseDTO courseDTO) {
    Course Course = courseRepository.findById(id)
        .orElse(null);

    Course.setName(courseDTO.getName());
    Course.setDescription(courseDTO.getDescription());
    Course = courseRepository.save(Course);
    return Course;
  }

  public void deleteCourse(Long id){
    courseRepository.deleteById(id);
    return;
  }

  public List<Student> getAllCourseCourses(Long id) {
    return courseRepository.findStudentByCourseId(id);
  }

  public Course getCoursesByName(String name) {
    return courseRepository.findByName(name).orElse(null);
  }

}
