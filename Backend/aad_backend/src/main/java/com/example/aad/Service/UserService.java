package com.example.aad.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.aad.Model.users;
import com.example.aad.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<users> getAllUsers() {
        return userRepository.findAll();
    }

    public users getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public users createUser(users user) {
        // Check if the user already exists
        if (userRepository.existsByEmail(user.getEmail())) {
            // Throw an exception, return null, or handle the situation as per your requirement
            // For example, you can throw an exception:
            throw new RuntimeException("User with username " + user.getEmail() + " already exists");
        }
        
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
