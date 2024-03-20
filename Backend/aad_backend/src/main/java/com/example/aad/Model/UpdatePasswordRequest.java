package com.example.aad.Model;

public class UpdatePasswordRequest {
    private String email;
    private String newPassword;

    // Default constructor
    public UpdatePasswordRequest() {}

    // Parameterized constructor
    public UpdatePasswordRequest(String email, String newPassword) {
        this.email = email;
        this.newPassword = newPassword;
    }

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}

