package com.example.aad.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.aad.Model.LoginRequest;
import com.example.aad.Model.users;
import com.example.aad.Repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserRepository usersRepository;

    @PostMapping("/api/login")
    public ResponseEntity<users> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        
        users user = usersRepository.findByEmail(email);
        
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
