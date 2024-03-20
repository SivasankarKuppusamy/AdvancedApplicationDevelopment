package com.example.aad.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.aad.Model.UserDetails;
import com.example.aad.Repository.UserDetailsRepository;

import java.util.List;

@RestController
@RequestMapping("/api/userdetails")
public class UserDetailsController {

    private final UserDetailsRepository userDetailsRepository;

    @Autowired
    public UserDetailsController(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    @GetMapping
    public List<UserDetails> getAllUserDetails() {
        return userDetailsRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDetails> getUserDetailsById(@PathVariable Long id) {
        UserDetails userDetails = userDetailsRepository.findById(id)
                .orElse(null);
        if (userDetails != null) {
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<UserDetails> createUserDetails(@RequestBody UserDetails userDetails) {
        UserDetails newUserDetails = userDetailsRepository.save(userDetails);
        return new ResponseEntity<>(newUserDetails, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDetails> updateUserDetails(@PathVariable Long id, @RequestBody UserDetails userDetails) {
        if (userDetailsRepository.existsById(id)) {
            userDetails.setId(id); // Ensure the ID in the path matches the ID in the object
            UserDetails updatedUserDetails = userDetailsRepository.save(userDetails);
            return new ResponseEntity<>(updatedUserDetails, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserDetails(@PathVariable Long id) {
        if (userDetailsRepository.existsById(id)) {
            userDetailsRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
