import React from "react";

const BillingForm = ({ formData, errorMsg, handleInputChange }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    appartment,
    city,
    country,
    state,
    zip,
  } = formData;
  return (
    <>
      {errorMsg && (
        <div class="alert alert-danger" role="alert">
          <p className="m-0" style={{ fontSize: "1.6rem" }}>
            {errorMsg}
          </p>
        </div>
      )}
      <div className="row">
        <div className="col-md-6 form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleInputChange}
            value={firstName}
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="Your First Name"
            required=""
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            value={lastName}
            className="form-control"
            id="lastName"
            placeholder="Your Last Name"
            required=""
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          onChange={handleInputChange}
          value={email}
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Your Email"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          onChange={handleInputChange}
          value={phone}
          type="tel"
          className="form-control"
          name="phone"
          id="phone"
          placeholder="Your Phone Number"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="address" className="form-label">
          Street address <sup>*</sup>
        </label>
        <input
          onChange={handleInputChange}
          name="address"
          value={address}
          type="text"
          className="form-control"
          id="address"
          placeholder="Your House number and street name"
          required
        />
      </div>
      <div className="form-group  mb-3">
        <label htmlFor="apartment">Apartment, Suite, etc. (optional)</label>
        <input
          onChange={handleInputChange}
          value={appartment}
          type="text"
          className="form-control"
          name="appartment"
          id="apartment"
          placeholder="Your Apartment, Suite, Unit, etc."
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="form-label">
            Town / City <sup>*</sup>
          </label>
          <input
            name="city"
            onChange={handleInputChange}
            value={city}
            type="text"
            className="form-control"
            id="city"
            placeholder="Your City"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="form-label">
            Country <sup>*</sup>
          </label>
          <input
            name="country"
            onChange={handleInputChange}
            value={country}
            type="text"
            className="form-control"
            id="country"
            placeholder="Your Country"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="state" className="form-label">
            State <sup>*</sup>
          </label>
          <input
            name="state"
            onChange={handleInputChange}
            value={state}
            type="text"
            className="form-control"
            id="state"
            placeholder="Your State"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="zip" className="form-label">
            Zip Code <sup>*</sup>
          </label>
          <input
            name="zip"
            onChange={handleInputChange}
            value={zip}
            type="text"
            className="form-control"
            id="zip"
            placeholder="Your Zip Code"
            required
          />
        </div>
      </div>
    </>
  );
};

export default BillingForm;
