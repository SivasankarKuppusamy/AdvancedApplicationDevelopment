import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/Loans.css'; // Import your CSS file for styling

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
    },
    { 
      id: 2, 
      status: 'Approved',
      fullName: 'Alice Smith',
      loanType: 'Agricultural Loan',
      amount: '$70,000',
      bank: 'Harvest Credit Union',
      applicationDate: '2024-03-15',
    },
    // Add more agricultural loan applications here
  ];

  // Filter out non-agricultural loan applications
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
                  <Link to={`/application/${application.id}`} className='view-button'>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='button-container'>
          <Link to="/new-application" className='new-application-button'>New Application</Link>
          <Link to="/loan-types" className='loan-types-button'>Explore Loan Types</Link>
          <Link to="/loan-requirements" className='loan-requirements-button'>Loan Requirements</Link>
        </div>
      </div>
    </div>
  );
}

export default Loans;
