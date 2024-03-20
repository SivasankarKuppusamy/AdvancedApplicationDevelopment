package com.example.aad.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.aad.Model.BankScheme;

@Repository
public interface BankSchemeRepository extends JpaRepository<BankScheme, Long> {
	 @Query("SELECT bs FROM BankScheme bs JOIN FETCH bs.bank")
	    List<BankScheme> findAllWithBanks();
}