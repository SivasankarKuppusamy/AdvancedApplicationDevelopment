package com.example.aad.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.aad.Model.Loan;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByUserId(Long userId);
}

