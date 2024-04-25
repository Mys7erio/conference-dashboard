import React, { useState } from 'react'
import '../SuperAdmin/AddInstitution.css'
const AddInstitution = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  

  const validateName = () => {
    if (!name) {
      setNameError("Institution Name is required.");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError("Invalid Institution name.");
    } else {
      setNameError("");
    }
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError("Institution Address is required.");
    } else if (!/^[A-Za-z]+$/.test(address)) {
      setAddressError("Invalid Institution Address.");
    } else {
      setAddressError("");
    }
  };

  const validateCity = () => {
    if (!city) {
      setCityError("City Name is required.");
    } else if (!/^[A-Za-z]+$/.test(city)) {
      setCityError("Invalid City name.");
    } else {
      setCityError("");
    }
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError("Country Name is required.");
    } else if (!/^[A-Za-z]+$/.test(country)) {
      setCountryError("Country Invalid name.");
    } else {
      setCountryError("");
    }
  };

  const validateContactNumber = () => {
    if (!contactNumber) {
      setContactNumberError("Contact number is required.");
    } else if (!/^\d{10}$/.test(contactNumber)) {
      setContactNumberError("Please enter a 10-digit contact number.");
    } else {
      setContactNumberError("");
    }
  };
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const validatePinCode = () => {
    if (!pinCode) {
      setPinCodeError("Postal code is required.");
    } else if (!/^\d{6}$/.test(pinCode)) {
      setPinCodeError("Invalid. Please enter a 6-digit postal number.");
    } else {
      setPinCodeError("");
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    validateName();
    validateAddress();
    validateEmail();
    validateContactNumber();
    validatePinCode();
    validateCountry();
    validateCity();
  };
  return (
    <div className='AddInstitution-container'>
       <div className='CreateAdmin-container'>
         <div className="admin-form">
           <div className="col-md-8">
             <div className="card">
                <div className="card-header">
                  <h5 className="title">Enter Institution Details</h5>
                </div>
                  <div className="card-body">
                   <form>
                   <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>Institution Name*</label>
                    <input type="text"  placeholder="Enter Institution Name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                        required
                      />
                       {nameError && <div> <p style={{color:"red",fontSize:"13px"}}>{nameError} </p> </div>}
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Contact No*</label>
                    <input type="text"
                        placeholder="Enter Contact NO"
                        className="form-control"
                        maxLength={10}
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        onBlur={validateContactNumber}
                        required
                      />
                      {contactNumberError && <div><p style={{color:"red",fontSize:"13px"}}>{contactNumberError} </p></div>}
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Institution Email*</label>
                    <input type="email"
                        placeholder="Enter Institution Email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        required
                      />
                       {emailError && <div> <p style={{color:"red",fontSize:"13px"}}>{emailError}</p></div>}
                  </div>
                </div>
                </div>
                   
                      <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>Country*</label>
                    <input type="text"  placeholder="Enter Country  "
                        className="form-control"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        onBlur={validateCountry}
                        required
                      />
                     {countryError && <div> <p style={{color:"red",fontSize:"13px"}}>{countryError}</p></div>} 
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>City*</label>
                    <input type="text"  placeholder="Enter City"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onBlur={validateCity}
                        required
                      />
                      {cityError && <div> <p style={{color:"red",fontSize:"13px"}}>{cityError}</p></div>} 
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Postal Code*</label>
                    <input type="text" value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        onBlur={validatePinCode}
                        className="form-control"
                        placeholder="Enter ZIP Code"
                        maxLength={6}
                        minLength={6}
                        required
                        />
                        {pinCodeError && <div> <p style={{color:"red",fontSize:"13px"}}>{pinCodeError}</p></div>}
                  </div>
                </div>
              </div>
              <div className='col-md-10 pl-1'>
                  <div className="form-group">
                    <label>Address*</label>
                    <input type="text" placeholder="Enter Full Adress"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={validateAddress}
                        required />
                         {addressError && <div> <p style={{color:"red",fontSize:"13px"}}>{addressError}</p></div>} 
                  </div>
                </div>
                      
              <div className="btncontainer">
              <button type="submit" className="btn">Save</button>
              </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default AddInstitution;