package com.example.atividade15.repository;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
  Optional<Course> findByName(String name);
}
