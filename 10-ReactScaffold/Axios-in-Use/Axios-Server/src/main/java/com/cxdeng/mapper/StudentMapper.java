package com.cxdeng.mapper;

import com.cxdeng.pojo.Student;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudentMapper {

    /*
     *  查询所有学生信息
     */
    List<Student> getAllStudents();

}
