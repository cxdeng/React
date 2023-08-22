package com.cxdeng.controller;

import com.cxdeng.pojo.Student;
import com.cxdeng.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        List<Student> studentList = studentService.getAllStudents();
        return studentList;
    }
}
