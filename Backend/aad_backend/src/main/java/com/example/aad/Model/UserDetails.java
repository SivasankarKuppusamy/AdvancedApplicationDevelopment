package com.example.aad.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserDetails {

    @Id
    
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String aadharNumber;
    private String panNumber;
    private String addressLine1;
    private int age;
    private String gender;
    private String category;
    private double income;
    private Date dob;
    private String coapplicantname;
    private String accNo;
    private String accType;
    private String branch;
    private String ifsc;
	public UserDetails(Long id, String fullName, String email, String phoneNumber, String aadharNumber,
			String panNumber, String addressLine1, int age, String gender, String category, double income, Date dob,
			String coapplicantname, String accNo, String accType, String branch, String ifsc) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.aadharNumber = aadharNumber;
		this.panNumber = panNumber;
		this.addressLine1 = addressLine1;
		this.age = age;
		this.gender = gender;
		this.category = category;
		this.income = income;
		this.dob = dob;
		this.coapplicantname = coapplicantname;
		this.accNo = accNo;
		this.accType = accType;
		this.branch = branch;
		this.ifsc = ifsc;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	public String getPanNumber() {
		return panNumber;
	}
	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getIncome() {
		return income;
	}
	public void setIncome(double income) {
		this.income = income;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getCoapplicantname() {
		return coapplicantname;
	}
	public void setCoapplicantname(String coapplicantname) {
		this.coapplicantname = coapplicantname;
	}
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public String getAccType() {
		return accType;
	}
	public void setAccType(String accType) {
		this.accType = accType;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getIfsc() {
		return ifsc;
	}
	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}
	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
