import React, { useState } from 'react';
import './form.css';

const Form = ({ form, handleChange, handleSubmit }) => {
  // State variables for validation status
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumError, setPhoneNumError] = useState('');
  const [dobError, setDobError] = useState('');
  const [provinceError, setProvinceError] = useState('');

  // Validation functions
  const validateName = () => {
    if (!form.name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!form.email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(form.email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };
  

  const validatePhoneNum = () => {
    const phoneNumRegex = /^\d{10,}$/;
  
    if (!form.phoneNum) {
      setPhoneNumError('Phone number is required');
    } else if (!phoneNumRegex.test(form.phoneNum)) {
      setPhoneNumError('Invalid phone number format');
    } else {
      setPhoneNumError('');
    }
  };
  

  const validateDob = () => {
    if (!form.dateOfBirth) {
      setDobError('Date of Birth is required');
    } else {
      setDobError('');
    }
  };

  const validateProvince = () => {
    if (form.province === 'Your Province') {
      setProvinceError('Province selection is required');
    } else {
      setProvinceError('');
    }
  };

  // Event handlers
  const handleNameChange = (e) => {
    handleChange(e);
    validateName();
  };

  const handleEmailChange = (e) => {
    handleChange(e);
    validateEmail();
  };

  const handlePhoneNumChange = (e) => {
    handleChange(e);
    validatePhoneNum();
  };

  const handleDobChange = (e) => {
    handleChange(e);
    validateDob();
  };

  const handleProvinceChange = (e) => {
    handleChange(e);
    validateProvince();
  };

  // Submit handler
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Validate all fields before submitting the form
    validateName();
    validateEmail();
    validatePhoneNum();
    validateDob();
    validateProvince();

    // If all fields are valid, submit the form
    if (!nameError && !emailError && !phoneNumError && !dobError && !provinceError) {
      handleSubmit(e);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmitForm}>
        <h2 className="form-title">Users Form</h2>
        <hr className="form-divider" />

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleNameChange}
            className={`form-input ${nameError ? 'error' : ''}`}
          />
          {nameError && <p className="error-label">{nameError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleEmailChange}
            className={`form-input ${emailError ? 'error' : ''}`}
          />
          {emailError && <p className="error-label">{emailError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNum" className="form-label">Phone Number:</label>
          <input
            type="tel"
            id="phoneNum"
            name="phoneNum"
            placeholder="Enter your phone number"
            required
            value={form.phoneNum}
            onChange={handlePhoneNumChange}
            className={`form-input ${phoneNumError ? 'error' : ''}`}
          />
          {phoneNumError && <p className="error-label">{phoneNumError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            value={form.dateOfBirth}
            onChange={handleDobChange}
            className={`form-input ${dobError ? 'error' : ''}`}
          />
          {dobError && <p className="error-label">{dobError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="province" className="form-label">Province:</label>
          <select
            name="province"
            id="province"
            required
            value={form.province}
            onChange={handleProvinceChange}
            className={`form-input ${provinceError ? 'error' : ''}`}
          >
             <option> Select Province </option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpaschim">Sudurpaschim</option>
          </select>
          {provinceError && <p className="error-label">{provinceError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="country" className="form-label">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter your country"
            required
            value={form.country}
            readOnly
            className="form-input"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
