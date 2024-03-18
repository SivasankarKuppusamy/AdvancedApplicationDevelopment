import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const currentPath = location.pathname;
  const nav=useNavigate();
  const isLoggedIn=localStorage.getItem('isLoggedIn');
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
 const  handleLogout =()=>{
  if(window.confirm("Are you sure")){
    localStorage.setItem('isLoggedIn',false);
    nav('/')
  }
 }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className="sidebar-header">
        <div className="logo">
        {isOpen  ?<>    <img className='user-icon' src="https://cdn-icons-png.freepik.com/512/3001/3001764.png" alt="User Icon"/>
       <h5>User name</h5></> :<></>}   
        </div>
        <div className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <MenuIcon /> : <MenuIcon />}
        </div>
      </div>
      <div className={`menu-container ${isOpen ? '' :'close'}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/user" className={currentPath === '/user' ? "selected" : ""} >
              {isOpen ? (
                <>
                  <DashboardIcon /> Dashboard
                </>
              ) : (
                <DashboardIcon />
              )}
            </Link>
          </li>
          <li>
            <Link to="/loans" className={currentPath === '/loans' || currentPath === '/new-application' ? "selected" : ""} >
              {isOpen ? (
                <>
                  <AccountBalanceIcon /> Loans
                </>
              ) : (
                <AccountBalanceIcon />
              )}
            </Link>
          </li>
          <li>
            <Link to="/documents" className={currentPath === '/documents' ? "selected" : ""} >
              {isOpen ? (
                <>
                  <DescriptionIcon /> Documents
                </>
              ) : (
                <DescriptionIcon />
              )}
            </Link>
          </li>
          <li>
            <Link to="/profile" className={currentPath === '/profile' ? "selected" : ""} >
              {isOpen ? (
                <>
                  <PersonIcon /> Profile
                </>
              ) : (
                <PersonIcon />
              )}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout} className={currentPath === '/logout' ? "selected" : ""} >
              {isOpen ? (
                <>
                  <LogoutIcon /> Logout
                </>
              ) : (
                <LogoutIcon />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
