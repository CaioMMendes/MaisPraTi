package com.example.atividade15.repository;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
  Optional<Student> findByEmail(String email);

  @Query("SELECT s.courses FROM Student s WHERE s.id = :id")
  List<Course> findCoursesByStudentId(@Param("id") Long id);
}
