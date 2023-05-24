package com.codecool.transactstat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(HttpServletResponse response){
        return new ResponseEntity<>("Authenticated", HttpStatus.ACCEPTED);
    }
}
