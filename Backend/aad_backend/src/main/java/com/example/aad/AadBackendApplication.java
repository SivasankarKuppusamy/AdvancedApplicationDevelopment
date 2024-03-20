package com.example.aad;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class AadBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AadBackendApplication.class, args);
	}

}
