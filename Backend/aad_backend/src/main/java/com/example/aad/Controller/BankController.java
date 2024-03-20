package com.example.aad.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.aad.Model.Bank;
import com.example.aad.Repository.BankRepository;
import java.util.List;

@RestController
@RequestMapping("/bank")
public class BankController {
    
    @Autowired
    private BankRepository bankRepository;
    
    // Create a new bank
    @PostMapping("/")
    public ResponseEntity<String> createBank(@RequestBody Bank bank) {
        bankRepository.save(bank);
        return ResponseEntity.ok("Bank created successfully.");
    }
    
    // Read a bank by id
    @GetMapping("/{id}")
    public ResponseEntity<Bank> getBank(@PathVariable Long id) {
        return bankRepository.findById(id)
                .map(bank -> ResponseEntity.ok().body(bank)) 
                .orElse(ResponseEntity.notFound().build());
    }
    
    // Update a bank
    @PutMapping("/{id}")
    public ResponseEntity<String> updateBank(@PathVariable Long id, @RequestBody Bank updatedBank) {
        return bankRepository.findById(id)
                .map(bank -> {
                    bank.setName(updatedBank.getName());
                    bank.setUsername(updatedBank.getUsername());
                    bank.setPassword(updatedBank.getPassword());
                    // Update other fields as needed
                    bankRepository.save(bank);
                    return ResponseEntity.ok("Bank updated successfully.");
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    // Delete a bank
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBank(@PathVariable Long id) {
        if (bankRepository.existsById(id)) {
            bankRepository.deleteById(id);
            return ResponseEntity.ok("Bank deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // Get all banks
    @GetMapping("/")
    public ResponseEntity<List<Bank>> getAllBanks() {
        List<Bank> banks = bankRepository.findAll();
        if (banks.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(banks);
        }
    }
}
