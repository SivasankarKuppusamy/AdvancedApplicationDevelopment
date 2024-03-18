import React, { useState } from 'react';
import '../Styles/Profile.css';
import Sidebar from './Sidebar';

function Profile() {
  const initialProfileData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '1234567890',
    aadharNumber: '1234 5678 9012',
    panNumber: 'ABCDE1234F',
    addressLine1: '123, Street Name',
    addressLine2: 'Apartment Name',
    district: 'District Name',
    city: 'City Name',
    state: 'State Name',
    dob: '1990-01-01',
    amount: '10000',
  };

  const [profileData, setProfileData] = useState({ ...initialProfileData });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    setProfileData({ ...initialProfileData });
  };

  return (
    <div className="prof" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="profile-container" style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-image"
        />
        <h5>{initialProfileData.fullName}</h5>
        <div className="profile-fields">
          {Object.entries(profileData).map(([key, value]) => (
            <div className="profile-field" key={key}>
              <label>{key.toUpperCase()}</label>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{value}</div>
              )}
            </div>
          ))}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <button className="update-btn" onClick={handleUpdateProfile}>
              Update
            </button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
