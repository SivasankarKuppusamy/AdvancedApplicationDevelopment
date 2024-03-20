package com.example.aad.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")

public class users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String name;
    private String role;
    public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public boolean isFilled() {
		return isFilled;
	}
	public users(Long id, String email, String password, String name, String role, boolean isFilled) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.role = role;
		this.isFilled = isFilled;
	}
	private  boolean isFilled;
    
	public boolean getisFilled() {
		return isFilled;
	}
	public void setFilled(boolean isFilled) {
		this.isFilled = isFilled;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public users(Long id, String email, String password, String name, boolean isFilled) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.isFilled = isFilled;
	}
	public users() {
		super();
	}
	
	
    
}
