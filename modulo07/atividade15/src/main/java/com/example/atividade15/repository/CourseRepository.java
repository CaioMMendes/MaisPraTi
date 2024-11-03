package com.example.atividade15.repository;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
  Optional<Course> findByName(String name);

  @Query("SELECT c.students FROM Course c WHERE c.id = :id")
  List<Student> findStudentByCourseId(@Param("id") Long id);
}
