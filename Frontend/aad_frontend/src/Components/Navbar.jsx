import React, { useState } from 'react';
import '../Styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo'>
            <Link to="/">
              <img className="logo1" alt="logo" src={logo}/></Link>
          </div>
          <div className="logo-name"> 
            <h2 className="name">Agri Tech</h2>
          
          </div>
          
          <div className="toggle">
          </div>
          <div className='links'>
            <ul>
              <li className='li-elements' >
                <div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className='services'>Services
                <div className='menu-hover'>  {showMenu && (
              <ul className="menu-list">
                <li><Link to="/menu1">Menu 1</Link></li>
                <li><Link to="/menu2">Menu 2</Link></li>
                <li><Link to="/menu3">Menu 3</Link></li>
              </ul>
            )}</div>
            </div>
              </li>
              <li className='li-elements'>
                <div className='partners'>Partners</div>
              </li>
              
              </ul>
              </div>
              
              <div className="top-bar">
                <ul>
                  <li className="li-elements">
                    <Link to="/faq">FAQ'S</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/register">Register</Link>
                  </li>
                  
                  <li className="li-elements">
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
          </div>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;
