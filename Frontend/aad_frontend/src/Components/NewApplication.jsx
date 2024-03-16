import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../Styles/NewApplication.css';

function NewApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    panNumber: '',
    addressLine1: '',
    addressLine2: '',
    district: '',
    city: '',
    state: '',
    dob: '',
    amount: '',
    duration: '',
    loanType: '',
    collateralDetails: '',
    additionalDocument: '',
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        aadharNumber: '',
        panNumber: '',
        addressLine1: '',
        addressLine2: '',
        district: '',
        city: '',
        state: '',
        dob: '',
        amount: '',
        duration: '',
        loanType: '',
        collateralDetails: '',
        additionalDocument: '',
        agreeToTerms: false,
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    return errors;
  };

  return (
    <div className="new-application" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="new-app" style={{ flex: 1, padding: '20px' }}>
        <h1>New Application</h1>
        <form className="new-form" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <h2>Personal Information</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Full Name:</td>
                    <td>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Address Line 1:</td>
                    <td>
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>District:</td>
                    <td>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>City:</td>
                    <td>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>State:</td>
                    <td>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ width: '48%' }}>
              <table>
                <tbody>
                  <h2>Documents</h2>
                  <tr>
                    <td>Aadhar Number:</td>
                    <td>
                      <input
                        type="text"
                        name="aadharNumber"
                        value={formData.aadharNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>PAN Number:</td>
                    <td>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Additional Document:</td>
                    <td>
                      <input
                        type="text"
                        name="additionalDocument"
                        value={formData.additionalDocument}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.additionalDocument && (
                        <span className="error">{formErrors.additionalDocument}</span>
                      )}
                    </td>
                  </tr>
                  <h2>Loan Details</h2>
                  <tr>
                    <td>Loan Amount:</td>
                    <td>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Loan Duration (months):</td>
                    <td>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Loan Type:</td>
                    <td>
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Loan Type</option>
                        <option value="crop">Crop Loan</option>
                        <option value="land">Land Loan</option>
                        <option value="equipment">Equipment Loan</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Collateral Details:</td>
                    <td>
                      <textarea
                        name="collateralDetails"
                        value={formData.collateralDetails}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
                  <tr>
            <td>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
            </td>
            <td>Agree to Terms and Conditions:</td>
          </tr>
          <button type="submit">Submit Application</button>
            </div>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default NewApplication;
