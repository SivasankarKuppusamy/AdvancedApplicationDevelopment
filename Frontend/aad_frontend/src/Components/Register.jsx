import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Please confirm password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!agree) {
      errors.agree = 'Please agree to the terms';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: '',
      });
      
      console.log('Registering...');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormErrors({ ...formErrors, name: '' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setFormErrors({ ...formErrors, confirmPassword: '' });
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
    setFormErrors({ ...formErrors, agree: '' });
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
            {/* <img alt="logo" src="https://lwa.rajasthan.gov.in/images/loan-bg.png" /> */}
            <h2>REGISTER &#x2764;</h2>
            <form>
              <div>
                <input
                  onChange={handleNameChange}
                  value={name}
                  type="text"
                  placeholder="Name"
                />
                {formErrors.name && <p className="error">{formErrors.name}</p>}
              </div>
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
              <div>
                <input
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                />
                {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
              </div>
              <div>
                <label className='check-text'>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={handleAgreeChange}
                  />
                  I agree to the terms
                </label>
                {formErrors.agree && <p className="error">{formErrors.agree}</p>}
              </div>
              <button onClick={validate} type="submit">Register</button>
            </form>

            <h3> Already have an account? <Link className="register-link" to="/login">Login</Link></h3>
          </div>
          <div className="login-image-container"></div>
        </div>
      </div>
    </body>
  );
}

export default RegisterPage;
