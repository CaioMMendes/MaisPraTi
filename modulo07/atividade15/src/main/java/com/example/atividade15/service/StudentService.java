package com.example.atividade15.service;

import com.example.atividade15.dto.StudentDTO;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

  @Autowired
  private StudentRepository studentRepository;

  @Autowired
  private CourseRepository courseRepository;

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

  public void deleteStudent(Long id) {
    studentRepository.deleteById(id);
    return;
  }

  public List<Course> getAllStudentCourses(Long id) {
    return studentRepository.findCoursesByStudentId(id);
  }

  public Student getStudentsByEmail(String email) {
    return studentRepository.findByEmail(email).orElse(null);
  }

  public void enrollStudentInCourse(Long studentId, Long courseId) {
    Optional<Student> studentOpt = studentRepository.findById(studentId);
    Optional<Course> courseOpt = courseRepository.findById(courseId);

    if (studentOpt.isPresent() && courseOpt.isPresent()) {
      Student student = studentOpt.get();
      Course course = courseOpt.get();

      student.getCourses().add(course);
      course.getStudents().add(student);

      studentRepository.save(student);
      courseRepository.save(course);
    } else {
      throw new RuntimeException("Estudante ou curso não encontrado.");
    }
  }

  public void removeStudentFromCourse(Long courseId, Long studentId) {
    Course course = courseRepository.findById(courseId)
        .orElseThrow(() -> new EntityNotFoundException("Curso não encontrado"));
    Student student = studentRepository.findById(studentId)
        .orElseThrow(() -> new EntityNotFoundException("Aluno não encontrado"));

    course.getStudents().remove(student);

    student.getCourses().remove(course);

    courseRepository.save(course);
    studentRepository.save(student);
  }

}
