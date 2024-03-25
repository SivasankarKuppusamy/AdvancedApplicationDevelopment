package com.aad.agritech.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.aad.agritech.Dto.ForgetPasswordRequest;
import com.aad.agritech.Dto.UpdatePasswordRequest;
import com.aad.agritech.Model.Users;
import com.aad.agritech.Service.UserService;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // @PostMapping("/update-password")
    // public ResponseEntity<?> updatePassword(@RequestBody UpdatePasswordRequest request) {
    //     return userService.updatePassword(request);
    // }
       
        
    @GetMapping
        @PreAuthorize("hasAuthority('admin')")

    public ResponseEntity<List<Users>> getAllUsers() {
        return userService.getAllUsers();
    }
    @PreAuthorize("hasAuthority('user') or hasAuthority('admin')")
    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    @PostMapping("/createUser")
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('admin')")

    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }
    @PreAuthorize("hasAuthority('user') or hasAuthority('admin')")
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Users user) {
        return userService.updateUser(id, user);
    }
      @PostMapping("/forgetPassword")
    public ResponseEntity<String> forgetPassword(@RequestBody ForgetPasswordRequest forgetPasswordRequest) {
        String email = forgetPasswordRequest.getEmail();
        if (!userService.existsByEmail(email)) {
            return ResponseEntity.badRequest().body("Email not found");
        }
        userService.sendDummyOTP(email);
        return ResponseEntity.ok("Dummy OTP sent successfully");
    }

    @PostMapping("/updatePassword")
    public ResponseEntity<String> updatePassword(@RequestBody UpdatePasswordRequest updatePasswordRequest) {
        String email = updatePasswordRequest.getEmail();
        String newPassword = updatePasswordRequest.getNewPassword();
        userService.updatePassword(email, newPassword);
        return ResponseEntity.ok("Password updated successfully");
    }
}

