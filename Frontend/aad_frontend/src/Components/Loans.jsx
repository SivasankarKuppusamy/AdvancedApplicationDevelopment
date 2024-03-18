import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/Loans.css';
import LoanDetails from './LoanDetails';

function Loans() {
  const applications = [
    { 
      id: 1, 
      status: 'Pending',
      fullName: 'John Doe',
      loanType: 'Agricultural Loan',
      amount: '$50,000',
      bank: 'Farmers Bank',
      applicationDate: '2024-03-16',
      agriculturalDetail: 'Special interest rate for agricultural equipment purchases',
      cropType: 'Wheat',
      landSize: '100 acres',
      requiredMachinery: 'Tractor, Harvester',
    },
    { 
      id: 2, 
      status: 'Approved',
      fullName: 'Alice Smith',
      loanType: 'Agricultural Loan',
      amount: '$70,000',
      bank: 'Harvest Credit Union',
      applicationDate: '2024-03-15',
      agriculturalDetail: 'Flexible repayment options tailored for seasonal income',
      cropType: 'Corn',
      landSize: '80 acres',
      requiredMachinery: 'Irrigation system',
      dueAmount: '$25,000', // Added due amount
    },
  ];
  
  const [selectedLoan, setSelectedLoan] = useState(applications[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleViewDetails = (loan) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };
  
  const handlePay = (loan) => {
    // Add your payment logic here
    alert(`Paid due amount of ${loan.dueAmount}`);
  };
  
  const agriculturalApplications = applications.filter(application => application.loanType === 'Agricultural Loan');

  return (
    <div className='loans-container'>
      <Sidebar />
      <div className='loans-content'>
        <h2>Agricultural Loan Applications</h2>
        <table className='application-table'>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Status</th>
              <th>Full Name</th>
              <th>Amount</th>
              <th>Bank</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agriculturalApplications.map(application => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.status}</td>
                <td>{application.fullName}</td>
                <td>{application.amount}</td>
                <td>{application.bank}</td>
                <td>{application.applicationDate}</td>
                <td>
                  <button onClick={() => handleViewDetails(application)} className='view-button'>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <LoanDetails isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} loan={selectedLoan} />
        
        <div className='button-container'>
          <Link to="/loan-list" className='new-application-button'>New Application</Link>
          <Link to="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target='blank' className='loan-requirements-button'>Apply For new PAN</Link>
        </div>
      </div>
    </div>
  );
}

export default Loans;
