package com.example.aad.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;
    
    private String password; // Storing hashed passwords
    @JsonManagedReference
    @OneToMany(mappedBy = "bank", cascade = CascadeType.ALL)
    private List<BankScheme> schemes;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<BankScheme> getSchemes() {
		return schemes;
	}

	  public void setSchemes(List<BankScheme> schemes) {
	        this.schemes = schemes;
	        for(BankScheme scheme : schemes) {
	            scheme.setBank(this); 
	        }
	    }

	public Bank(Long id, String name, String username, String password, List<BankScheme> schemes) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.schemes = schemes;
	}

	public Bank() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    // Constructors, getters, setters
}
