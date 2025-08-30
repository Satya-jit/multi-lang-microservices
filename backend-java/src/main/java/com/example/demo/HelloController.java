package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {
    
    @GetMapping("/")
    public String home() {
        return "Java Spring Boot Backend is running!";
    }
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Java Spring Boot! ☕";
    }
    
    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("service", "java-backend");
        response.put("status", "healthy");
        response.put("version", "1.0.0");
        return response;
    }
}
