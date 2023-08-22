package com.cxdeng.service;

import com.cxdeng.pojo.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    /*
     *   获取学生信息
     */
    List<Student> getAllStudents();

}
