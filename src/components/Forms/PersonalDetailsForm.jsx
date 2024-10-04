import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function PersonalDetailsForm({ personalDetails, onChange, onApply }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleApply(e) {
    e.preventDefault();
    onApply();
    setIsEditing(false);
  }

  return (
    <section className="personal-details-form-container">
      <div className="personal-details-form-title-toggle">
        <h2 className="personal-details-form-title">Personal Details</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form
              className="personal-details-form-details"
              onSubmit={handleApply}
            >
              <label className="full-name-label">
                Full Name
                <input
                  className="full-name-input"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={personalDetails.fullName}
                  onChange={onChange}
                />
              </label>

              <label className="job-title-label">
                Job Title
                <input
                  className="job-title-input"
                  type="text"
                  name="jobTitle"
                  placeholder="Fullstack Web Developer"
                  value={personalDetails.jobTitle}
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </label>

              <div className="personal-details-form-buttons">
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className="personal-details-form-overview">
              <div className="full-name-overview-container">
                <h4 className="full-name-overview-title">Full Name</h4>
                <p className="full-name-overview">{personalDetails.fullName}</p>
              </div>

              <div className="job-title-overview-container">
                <h4 className="job-title-overview-title">Job Title</h4>
                <p className="job-title-overview">{personalDetails.jobTitle}</p>
              </div>

              <div className="phone-number-overview-container">
                <h4 className="phone-number-overview-title">Phone Number</h4>
                <p className="phone-number-overview">
                  {personalDetails.phoneNumber}
                </p>
              </div>

              <div className="email-overview-container">
                <h4 className="email-overview-title">Email</h4>
                <p className="email-overview">{personalDetails.email}</p>
              </div>

              <div className="address-overview-container">
                <h4 className="address-overview-title">Address</h4>
                <p className="address-overview">{personalDetails.address}</p>
              </div>

              <div className="personal-details-form-buttons">
                <EditButton onEdit={handleEdit} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default PersonalDetailsForm;
