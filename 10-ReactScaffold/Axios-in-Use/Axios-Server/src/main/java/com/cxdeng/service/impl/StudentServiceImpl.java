package com.cxdeng.service.impl;

import com.cxdeng.mapper.StudentMapper;
import com.cxdeng.pojo.Student;
import com.cxdeng.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentMapper studentMapper;

    @Override
    public List<Student> getAllStudents() {
        return studentMapper.getAllStudents();
    }
}
