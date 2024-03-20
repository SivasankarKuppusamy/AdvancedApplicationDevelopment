package com.example.aad.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.aad.Model.users;

@Repository
public interface UserRepository extends JpaRepository<users, Long> {

	boolean existsByEmail(String email);

	users findByEmail(String email);
}

