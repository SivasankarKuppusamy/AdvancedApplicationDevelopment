import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Login.css';
import logo from "../assets/logo.jpg"

function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [stage, setStage] = useState('emailInput');

  const sendResetLink = async (e) => {
    e.preventDefault();
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Email is required';
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/forgetPassword', { email });
      alert(response.data);
      setStage('otpInput');
    } catch (error) {
      alert("Failed to send reset link. Please try again.");
      console.error('Reset link send failed:', error);
    }
  };

  const submitOtp = async (e) => {
    e.preventDefault();
    const errors = {};

    if (otp.trim() === '') {
      errors.otp = 'OTP is required';
      setFormErrors(errors);
      return;
    }

   if(otp==='1234'){
    setStage('newPasswordInput');
   }
   else {
    alert("Wrong OTP")
   }
  };

  const submitNewPassword = async (e) => {
    e.preventDefault();
    const errors = {};

    if (newPassword.trim() === '') {
      errors.newPassword = 'New password is required';
      setFormErrors(errors);
      return;
    }

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/updatePassword', { email, newPassword });
      alert(response.data);
      window.location.href = '/login';
    } catch (error) {
      alert("Failed to update password. Please try again.");
      console.error('Password update failed:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setFormErrors({ ...formErrors, otp: '' });
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setFormErrors({ ...formErrors, newPassword: '' });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setFormErrors({ ...formErrors, confirmPassword: '' });
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
            <h2>FORGET PASSWORD &#x1F62D;</h2>
            {stage === 'emailInput' && (
              <form onSubmit={sendResetLink}>
                <div>
                  <input
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <button type="submit">Send Reset Link</button>
              </form>
            )}
            {stage === 'otpInput' && (
              <form onSubmit={submitOtp}>
                <div>
                  <input
                    onChange={handleOtpChange}
                    value={otp}
                    type="text"
                    placeholder="Enter OTP"
                  />
                  {formErrors.otp && <p className="error">{formErrors.otp}</p>}
                </div>
                <button type="submit">Submit OTP</button>
              </form>
            )}
            {stage === 'newPasswordInput' && (
              <form onSubmit={submitNewPassword}>
                <div>
                  <input
                    onChange={handleNewPasswordChange}
                    value={newPassword}
                    type="password"
                    placeholder="Enter new password"
                  />
                  {formErrors.newPassword && <p className="error">{formErrors.newPassword}</p>}
                </div>
                <div>
                  <input
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirm new password"
                  />
                  {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
                </div>
                <button type="submit">Update Password</button>
              </form>
            )}
          </div>
          <div className="login-image-container"></div>
        </div>
      </div>
    </body>
  );
}

export default ForgetPasswordPage;
