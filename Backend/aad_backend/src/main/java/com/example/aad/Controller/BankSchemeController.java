package com.example.aad.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.aad.Model.BankScheme;
import com.example.aad.Repository.BankSchemeRepository;

import java.util.List;

@RestController
@RequestMapping("/bank-schemes")
public class BankSchemeController {
    
    @Autowired
    private BankSchemeRepository bankSchemeRepository;
    
    // Create a new	 bank scheme
    @PostMapping("/")
    public BankScheme createBankScheme(@RequestBody BankScheme bankScheme) {
        return bankSchemeRepository.save(bankScheme);
    }
    
    @GetMapping("/{id}")
    public BankScheme getBankScheme(@PathVariable Long id) {
        return bankSchemeRepository.findById(id).orElse(null);
    }
    
    // Update a bank scheme
    @PutMapping("/{id}")
    public BankScheme updateBankScheme(@PathVariable Long id, @RequestBody BankScheme updatedBankScheme) {
        return bankSchemeRepository.findById(id)
                .map(bankScheme -> {
                    bankScheme.setSchemeName(updatedBankScheme.getSchemeName());
                    bankScheme.setBankid(updatedBankScheme.getBankid());
                    bankScheme.setInterestRate(updatedBankScheme.getInterestRate());
                    bankScheme.setMaximumLoanAmount(updatedBankScheme.getMaximumLoanAmount());
                    bankScheme.setDescription(updatedBankScheme.getDescription());
                    bankScheme.setEligibilityCriteria(updatedBankScheme.getEligibilityCriteria());
                    // Update other fields as needed
                    return bankSchemeRepository.save(bankScheme);
                })
                .orElse(null);
    }
    
    // Delete a bank scheme
    @DeleteMapping("/{id}")
    public void deleteBankScheme(@PathVariable Long id) {
        bankSchemeRepository.deleteById(id);
    }
    @GetMapping
    public List<BankScheme> getAllBankSchemesWithBanks() {
        return bankSchemeRepository.findAll();
    }
}
