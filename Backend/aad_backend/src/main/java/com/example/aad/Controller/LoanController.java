package com.example.aad.Controller;

import com.example.aad.Model.Loan;
import com.example.aad.Repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private final LoanRepository loanRepository;

    @Autowired
    public LoanController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }
    @PutMapping("/{loanId}/approve")
    public ResponseEntity<?> approveLoan(@PathVariable Long loanId) {
        try {
            // Retrieve the loan from the database
            Loan loan = loanRepository.findById(loanId)
                                       .orElseThrow(() -> new Exception("Loan not found"));

            // Check if the loan is already approved
            if (loan.getStatus().equals("Approved")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                     .body("Loan is already approved");
            }

            // Update the loan status to Approved
            loan.setStatus("Approved");
            loan.setDueAmount(loan.getAmount());

            // Save the updated loan back to the database
            loanRepository.save(loan);

            return ResponseEntity.ok("Loan approved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error approving loan: " + e.getMessage());
        }
    }
    @PutMapping("/{loanId}/deny")
    public ResponseEntity<?> denyLoan(@PathVariable Long loanId) {
    	try {
    		// Retrieve the loan from the database
    		Loan loan = loanRepository.findById(loanId)
    				.orElseThrow(() -> new Exception("Loan not found"));
    		
    		// Check if the loan is already approved
    		if (loan.getStatus().equals("Approved")) {
    			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
    					.body("Loan is already approved");
    		}
    		
    		// Update the loan status to Approved
    		loan.setStatus("Denied");
    		
    		
    		// Save the updated loan back to the database
    		loanRepository.save(loan);
    		
    		return ResponseEntity.ok("Loan approved successfully");
    	} catch (Exception e) {
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    				.body("Error approving loan: " + e.getMessage());
    	}
    }
    @GetMapping("/d/{userId}")
    public ResponseEntity<List<Loan>> getLoansByUserId(@PathVariable Long userId) {
        List<Loan> loans = loanRepository.findByUserId(userId);
        return ResponseEntity.ok().body(loans);
    }
    @GetMapping
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        Loan loan = loanRepository.findById(id).orElse(null);
        if (loan != null) {
            return new ResponseEntity<>(loan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Loan> createLoan(@RequestBody Loan loan) {
        Loan newLoan = loanRepository.save(loan);
        return new ResponseEntity<>(newLoan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable Long id, @RequestBody Loan updatedLoan) {
        return loanRepository.findById(id)
                .map(existingLoan -> {
                    existingLoan.setUserId(updatedLoan.getUserId());
                    existingLoan.setSchemeId(updatedLoan.getSchemeId());
                    existingLoan.setStatus(updatedLoan.getStatus());
                    existingLoan.setFullName(updatedLoan.getFullName());
                    existingLoan.setLoanType(updatedLoan.getLoanType());
                    existingLoan.setAmount(updatedLoan.getAmount());
                    existingLoan.setApplicationDate(updatedLoan.getApplicationDate());
                    existingLoan.setCropType(updatedLoan.getCropType());
                    existingLoan.setLandSize(updatedLoan.getLandSize());
                    existingLoan.setRequiredMachinery(updatedLoan.getRequiredMachinery());
                    existingLoan.setDueAmount(updatedLoan.getDueAmount());

                    Loan savedLoan = loanRepository.save(existingLoan);
                    return ResponseEntity.ok(savedLoan);
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable Long id) {
        loanRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
