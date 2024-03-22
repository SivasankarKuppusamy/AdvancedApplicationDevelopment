import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';
import logo from "../assets/logo.jpg"
import { jwtDecode } from "jwt-decode";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [decodedToken, setDecodedToken] = useState(null);

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const nav = useNavigate();

  const validate = async (e) => {
    e.preventDefault();
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/authenticate', {
        email,
        password
      });

      const token = response.data;
  console.log(token)
      localStorage.setItem('token', token);
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setDecodedToken(decoded);
        localStorage.setItem('userRole',decoded.role);
        localStorage.setItem('email',decoded.sub);
        localStorage.setItem("expiry",decoded.exp);
        localStorage.setItem("isFilled",decoded.filled);
        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("userId",decoded.id);

        } catch (error) {
          console.error('Error decoding JWT token:', error);
        }
      } else {
        console.warn('No JWT token found in localStorage');
      }
        if(localStorage.getItem('userRole')==='user'){
      if(localStorage.getItem('isFilled')){
        nav('/user');
      }
      else{
        alert("Kindly Update your Details")
        nav('/profile')
      }
    }
    else if(localStorage.getItem('userRole')==='admin'){
      localStorage.setItem('userRole','admin')
      nav('/admin-dashboard')
    }
    } catch (error) {
      alert("Wrong Credentials");
      console.error('Login failed:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  return (
    <body id="login-body">
      <div className="login-container">
        <div className="login-outer-container">
          <div className="login-content-container">
            <br />
            <br />
            <br />
            <br />
            <img className='logo' alt="logo" src={logo}/>
            <h2>WELCOME BACK &#x2764;</h2>
            <form>
              <div>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  type="email"
                  placeholder="Email"
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>
              <div>
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
                {formErrors.password && <p className="error">{formErrors.password}</p>}
              </div>
              <Link className='register-link' style={{textAlign:'left',color:'blue'}} to="/forget">Forget Password ? </Link>
              <button onClick={validate} type="submit">Login</button>
            </form>

            <h3> New To our platform ? Register as</h3><Link className="register-link" to="/register">Farmer ! </Link>
          </div>
          <div className="login-image-container"></div>
        </div>
      </div>
    </body>
  );
}

export default LoginPage;
