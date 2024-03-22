package com.aad.agritech.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aad.agritech.Model.UserDetails;
import com.aad.agritech.Model.Users;

@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

    Optional<Users> findByEmail(String email);
    
}
