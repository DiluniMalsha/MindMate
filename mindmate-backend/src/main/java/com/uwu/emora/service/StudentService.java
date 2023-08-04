package com.uwu.emora.service;

import com.uwu.emora.dto.StudentDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    void saveStudent(StudentDto dto);

    List<StudentDto> getAllStudents();

}
