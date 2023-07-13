import React, { useState } from "react";
import "../SuperAdmin/CreateAdmin.css";

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");

  const validateName = () => {
    if (!name) {
      setNameError("Name is required.");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError("Invalid name.");
    } else {
      setNameError("");
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

  const validateContactNumber = () => {
    if (!contactNumber) {
      setContactNumberError("Contact number is required.");
    } else if (!/^\d{10}$/.test(contactNumber)) {
      setContactNumberError("Please enter a 10-digit contact number.");
    } else {
      setContactNumberError("");
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
    validateEmail();
    validateContactNumber();
    validatePinCode();
  };

  return (
    <div className="CreateAdmin-container">
      <div className="admin-form">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="title">Enter Admin Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-4 pr-1">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="Sara"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                      />
                      {nameError && <div className="error">{nameError}</div>}
                    </div>
                  </div>
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Alan"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pl-1">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Walker"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Sara@gmail.com"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                      />
                      {emailError && <div className="error">{emailError}</div>}
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Phone number</label>
                      <input
                        type="text"
                        placeholder="9210563100"
                        className="form-control"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        onBlur={validateContactNumber}
                      />
                      {contactNumberError && (
                        <div>{contactNumberError}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Home Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pr-1">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 px-1">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pl-1">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        onBlur={validatePinCode}
                        className="form-control"
                        placeholder="ZIP Code"
                      />
                      {pinCodeError && (
                        <div className="error">{pinCodeError}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pr-1">
                    <div className="form-group ">
                      <label>Choose Institution</label>
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle form-control btn-primary"
                          type="button"
                          id="dropdownMenuButton"
                          aria-haspopup="true"
                        >
                          Institution
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Institution 1
                          </a>
                          <a className="dropdown-item" href="#">
                            Institution 2
                          </a>
                          <a className="dropdown-item" href="#">
                            Institution 3
                          </a>
                          <a className="dropdown-item" href="#">
                            Institution 4
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 pr-1">
                    <div className="form-group">
                      <label>Department</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Department"
                      />
                    </div>
                  </div>
                </div>
                <div className="btncontainer">
                  <button type="submit" className="btn" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
