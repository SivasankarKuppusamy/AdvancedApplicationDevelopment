package com.aad.agritech.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aad.agritech.Model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

	boolean existsByEmail(String email);
	
	Optional<Users> findByEmail(String email);
}
