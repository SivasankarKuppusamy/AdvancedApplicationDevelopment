import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Sidebar.css';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <div className="logo">
        <img className='user-icon' src="https://cdn-icons-png.freepik.com/512/3001/3001764.png" alt="User Icon"/>
        <h5>User name</h5>     
      </div>
      <div>
        <ul className="sidebar-menu">
          <li><Link to="/user" className={currentPath === '/user' ? "selected" : ""}>Dashboard</Link></li>
          <li><Link to="/loans" className={currentPath === '/loans' ||currentPath==='/new-application'? "selected" : ""}>Loans</Link></li>
          <li><Link to="/documents" className={currentPath === '/documents' ? "selected" : ""}>Documents</Link></li>
          <li><Link to="/profile" className={currentPath === '/profile' ? "selected" : ""}>Profile</Link></li>
          <li><Link to="/logout" className={currentPath === '/logout' ? "selected" : ""}>Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
