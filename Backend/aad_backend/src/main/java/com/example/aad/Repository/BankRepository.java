package com.example.aad.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.aad.Model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long> {
    // Custom methods for querying if needed
}