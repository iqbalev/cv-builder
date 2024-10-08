import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function PersonalDetailsSection({ personalDetails, onChange, onApply }) {
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
    <section className={styles.personalDetailsContainer}>
      <div className={styles.headingToggle}>
        <h2 className={styles.heading}>Personal Details</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form className={styles.form} onSubmit={handleApply}>
              <label className={styles.label}>
                Full Name
                <input
                  className={styles.input}
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={personalDetails.fullName}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Job Title
                <input
                  className={styles.input}
                  type="text"
                  name="jobTitle"
                  placeholder="Fullstack Web Developer"
                  value={personalDetails.jobTitle}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Phone Number
                <input
                  className={styles.input}
                  type="tel"
                  name="phoneNumber"
                  placeholder="5551234567"
                  value={personalDetails.phoneNumber}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={personalDetails.email}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Address
                <input
                  className={styles.input}
                  type="text"
                  name="address"
                  placeholder="New York, US"
                  value={personalDetails.address}
                  onChange={onChange}
                />
              </label>

              <div className={styles.button}>
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className={styles.overview}>
              <div className={styles.details}>
                <h4 className={styles.subHeading}>Full Name</h4>
                <p className={styles.text}>{personalDetails.fullName}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Job Title</h4>
                <p className={styles.text}>{personalDetails.jobTitle}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Phone Number</h4>
                <p className={styles.text}>{personalDetails.phoneNumber}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Email</h4>
                <p className={styles.text}>{personalDetails.email}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Address</h4>
                <p className={styles.text}>{personalDetails.address}</p>
              </div>

              <div className={styles.button}>
                <EditButton onEdit={handleEdit} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default PersonalDetailsSection;
