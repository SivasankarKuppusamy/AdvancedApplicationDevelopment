package com.example.aad.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class BankScheme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long bankid;
    public Long getBankid() {
		return bankid;
	}

	public void setBankid(Long bankid) {
		this.bankid = bankid;
	}

	public BankScheme(Long id, Long bankid, String schemeName, double interestRate, int maximumLoanAmount,
			String description, String eligibilityCriteria, Bank bank) {
		super();
		this.id = id;
		this.bankid = bankid;
		this.schemeName = schemeName;
		this.interestRate = interestRate;
		this.maximumLoanAmount = maximumLoanAmount;
		this.description = description;
		this.eligibilityCriteria = eligibilityCriteria;
		this.bank = bank;
	}

	private String schemeName;
    
    private double interestRate;
    
    private int maximumLoanAmount;
    
    private String description;
    
    private String eligibilityCriteria;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private Bank bank;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSchemeName() {
		return schemeName;
	}

	public void setSchemeName(String schemeName) {
		this.schemeName = schemeName;
	}

	public double getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	public int getMaximumLoanAmount() {
		return maximumLoanAmount;
	}

	public void setMaximumLoanAmount(int maximumLoanAmount) {
		this.maximumLoanAmount = maximumLoanAmount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEligibilityCriteria() {
		return eligibilityCriteria;
	}

	public void setEligibilityCriteria(String eligibilityCriteria) {
		this.eligibilityCriteria = eligibilityCriteria;
	}

	public Bank getBank() {
		return bank;
	}

	public void setBank(Bank bank) {
		this.bank = bank;
	}

	public BankScheme(Long id, String schemeName, double interestRate, int maximumLoanAmount, String description,
			String eligibilityCriteria, Bank bank) {
		super();
		this.id = id;
		this.schemeName = schemeName;
		this.interestRate = interestRate;
		this.maximumLoanAmount = maximumLoanAmount;
		this.description = description;
		this.eligibilityCriteria = eligibilityCriteria;
		this.bank = bank;
	}

	public BankScheme() {
		super();
	}
    
    // Constructors, getters, setters
}
