package com.example.aad.Model;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long userId; // User ID associated with the loan
    
    private Long schemeId; // Bank ID associated with the loan
    private Long bankid;
    public Loan(Long id, Long userId, Long schemeId, Long bankid, String status, String fullName, String loanType,
			double amount, String applicationDate, double monthlyPayment, String cropType, String landSize,
			String requiredMachinery, double dueAmount) {
		super();
		this.id = id;
		this.userId = userId;
		this.schemeId = schemeId;
		this.bankid = bankid;
		this.status = status;
		this.fullName = fullName;
		this.loanType = loanType;
		this.amount = amount;
		this.applicationDate = applicationDate;
		this.monthlyPayment = monthlyPayment;
		this.cropType = cropType;
		this.landSize = landSize;
		this.requiredMachinery = requiredMachinery;
		this.dueAmount = dueAmount;
	}

	public Long getBankid() {
		return bankid;
	}

	public void setBankid(Long bankid) {
		this.bankid = bankid;
	}

	private String status;
    
    private String fullName;
    
    private String loanType;
    
    private double amount;
    
    private String applicationDate;
    private double monthlyPayment;
    public Loan(Long id, Long userId, Long schemeId, String status, String fullName, String loanType, double amount,
			String applicationDate, double monthlyPayment, String cropType, String landSize, String requiredMachinery,
			double dueAmount) {
		super();
		this.id = id;
		this.userId = userId;
		this.schemeId = schemeId;
		this.status = status;
		this.fullName = fullName;
		this.loanType = loanType;
		this.amount = amount;
		this.applicationDate = applicationDate;
		this.monthlyPayment = monthlyPayment;
		this.cropType = cropType;
		this.landSize = landSize;
		this.requiredMachinery = requiredMachinery;
		this.dueAmount = dueAmount;
	}

	public double getMonthlyPayment() {
		return monthlyPayment;
	}

	public void setMonthlyPayment(double monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}

	private String cropType;
    
    private String landSize;
    
    private String requiredMachinery;
    
    private double dueAmount; 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getSchemeId() {
		return schemeId;
	}

	public void setSchemeId(Long bankId) {
		this.schemeId = bankId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}


	public String getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(String applicationDate) {
		this.applicationDate = applicationDate;
	}



	public String getCropType() {
		return cropType;
	}

	public void setCropType(String cropType) {
		this.cropType = cropType;
	}

	public String getLandSize() {
		return landSize;
	}

	public void setLandSize(String landSize) {
		this.landSize = landSize;
	}

	public String getRequiredMachinery() {
		return requiredMachinery;
	}

	public void setRequiredMachinery(String requiredMachinery) {
		this.requiredMachinery = requiredMachinery;
	}

	public double getDueAmount() {
		return dueAmount;
	}

	public void setDueAmount(double dueAmount) {
		this.dueAmount = dueAmount;
	}

	public Loan(Long id, Long userId, Long schemeId, String status, String fullName, String loanType, double amount,
			String bank, String applicationDate, String agriculturalDetail, String cropType, String landSize,
			String requiredMachinery, double dueAmount) {
		super();
		this.id = id;
		this.userId = userId;
		this.schemeId = schemeId;
		this.status = status;
		this.fullName = fullName;
		this.loanType = loanType;
		this.amount = amount;
		this.applicationDate = applicationDate;
		this.cropType = cropType;
		this.landSize = landSize;
		this.requiredMachinery = requiredMachinery;
		this.dueAmount = dueAmount;
	}

	public Loan() {
		super();
	}
	

    // Constructors, getters, and setters
}
