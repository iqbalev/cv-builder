import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function PersonalDetailsForm({ personalDetails, handleChange }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="personal-details-form-container">
      <div className="personal-details-form-title-toggle">
        <h2 className="personal-details-form-title">Personal Details</h2>
        <ToggleButton handleToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <form className="personal-details-form-details">
          <label className="full-name-label">
            Full Name
            <input
              className="full-name-input"
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={personalDetails.fullName}
              onChange={handleChange}
            />
          </label>

          <label className="applied-position-label">
            Applied Position
            <input
              className="applied-position-input"
              type="text"
              name="appliedPosition"
              placeholder="Fullstack Web Developer"
              value={personalDetails.appliedPosition}
              onChange={handleChange}
            />
          </label>

          <label className="phone-number-label">
            Phone Number
            <input
              className="phone-number-input"
              type="tel"
              name="phoneNumber"
              placeholder="5551234567"
              value={personalDetails.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label className="email-label">
            Email
            <input
              className="email-input"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={personalDetails.email}
              onChange={handleChange}
            />
          </label>

          <label className="address-label">
            Address
            <input
              className="address-input"
              type="text"
              name="address"
              placeholder="New York, US"
              value={personalDetails.address}
              onChange={handleChange}
            />
          </label>

          <div className="personal-details-form-buttons">
            <EditButton />
            <ApplyButton />
          </div>
        </form>
      )}
    </section>
  );
}

export default PersonalDetailsForm;
