package com.example.aad.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.aad.Model.UpdatePasswordRequest;
import com.example.aad.Model.users;
import com.example.aad.Repository.UserRepository;
import com.example.aad.Service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired UserRepository userRepo;

    @PostMapping("/update-password")
    public ResponseEntity<?> updatePassword(@RequestBody UpdatePasswordRequest request) {
        users user = userRepo.findByEmail(request.getEmail());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found with email: " + request.getEmail());
        }

        user.setPassword(request.getNewPassword());
        userRepo.save(user);

        return ResponseEntity.ok("Password updated successfully");
    }

    @GetMapping
    public ResponseEntity<List<users>> getAllUsers() {
        List<users> userList = userService.getAllUsers();
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<users> getUserById(@PathVariable Long id) {
        users user = userService.getUserById(id);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<users> createUser(@RequestBody users user) {
        try {
            users createdUser = userService.createUser(user);
            return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody users user) {
        return userRepo.findById(id)
                .map(existingUser -> {
                    // Update the necessary fields from the request body
                    existingUser.setName(user.getName());
                    existingUser.setEmail(user.getEmail());
                    existingUser.setPassword(user.getPassword());
                    existingUser.setFilled(user.getisFilled());
                    

                    // Save the updated user entity
                    userRepo.save(existingUser);
                    return ResponseEntity.ok("User updated successfully.");
                })
                .orElseGet(() -> {
                    // Handle the case where the user is not found
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with id: " + id);
                });
    }

}
