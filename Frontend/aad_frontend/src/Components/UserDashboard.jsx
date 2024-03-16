import React from 'react';
import Sidebar from './Sidebar';
import '../Styles/userDash.css'
import { useNavigate } from 'react-router-dom';
function UserDashboard() {
  const nav=useNavigate();
  const navtoLoan=()=>{
    nav('/loans')
  }
  return (
    <div className='user-dash' style={{ display: 'flex' }}>
     <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <div className='top'>
        <h3 className='hello-user'>
            Hello User ! 👋
        </h3>
        <button onClick={navtoLoan}>New Loan Application</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default UserDashboard;
