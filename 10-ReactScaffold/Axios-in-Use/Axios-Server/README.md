# A Backend Server for Axios

A backend server written for debugging axios

## The Introduction of Backend Server

This backend server is based on Springboot 2.7.14 version.

### The Structure of Directory

```java
├─.idea
├─src
│  ├─main
│  │  ├─java
│  │  │  └─com
│  │  │      └─cxdeng
│  │  │          ├─config
│  │  │          ├─controller
│  │  │          ├─mapper
│  │  │          ├─pojo
│  │  │          └─service
│  │  │              └─impl
│  │  └─resources
│  │      ├─mapper
│  │      ├─static
│  │      └─templates
│  └─test
│      └─java
│          └─com
│              └─cxdeng
└─target
    ├─classes
    │  ├─com
    │  │  └─cxdeng
    │  │      ├─config
    │  │      ├─controller
    │  │      ├─mapper
    │  │      ├─pojo
    │  │      └─service
    │  │          └─impl
    │  └─mapper
    └─generated-sources
        └─annotations
```

### Controller

```java
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
```

### Service

Interface

```java
package com.cxdeng.service;

import com.cxdeng.pojo.Student;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();

}

```

Implementation

```java
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
```

### mapper
```java
package com.cxdeng.mapper;

import com.cxdeng.pojo.Student;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudentMapper {

    List<Student> getAllStudents();

}
```


```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.cxdeng.mapper.StudentMapper">

    <select id="getAllStudents" resultType="com.cxdeng.pojo.Student">
        select * from student
    </select>
    
</mapper>
```

### application.yml

```yml
server:
  port: 8080

spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.182.131:3306/AxiosInUse?serverTimezone=UTC
    username: root
    password: root

mybatis:
  mapper-locations: classpath:mapper/*.xml
  type-aliases-package: com.cxdeng.pojo
  configuration:
    map-underscore-to-camel-case: true
```