package com.example.atividade15.service;

import com.example.atividade15.dto.StudentDTO;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

  @Autowired
  private StudentRepository studentRepository;

  public Student createStudent(Student student) {
    return studentRepository.save(student);
  }

  public Student getStudentById(Long id) {
    return studentRepository.findById(id).orElse(null);
  }

  public Student updateStudent(Long id, StudentDTO studentDTO) {
    Student student = studentRepository.findById(id)
        .orElse(null);

    student.setName(studentDTO.getName());
    student.setEmail(studentDTO.getEmail());
    student = studentRepository.save(student);
    return student;
  }

  public void deleteStudent(Long id){
    studentRepository.deleteById(id);
    return;
  }

  public List<Course> getAllStudentCourses(Long id) {
    return studentRepository.findCoursesByStudentId(id);
  }

  public Student getStudentsByEmail(String email) {
    return studentRepository.findByEmail(email).orElse(null);
  }

}
