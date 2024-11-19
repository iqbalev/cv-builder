import { useState } from "react";
import { ChevronIcon } from "../Icons.jsx";
import PersonalDetailsForm from "./PersonalDetailsForm.jsx";
import PersonalDetailsOverview from "./PersonalDetailsOverview.jsx";
import styles from "../../styles/PersonalDetails/PersonalDetailsSection.module.css";

function PersonalDetailsSection({ personalDetails, onChange, onApply }) {
  const [isOpen, setIsOpen] = useState(false);
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
  }

  function handleBack() {
    setIsEditing(false);
  }

  return (
    <section className={styles.personalDetailsContainer}>
      <div className={styles.headingIcon} role="button" onClick={handleToggle}>
        <h2 className={styles.heading}>Personal Details</h2>
        <ChevronIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <PersonalDetailsForm
              personalDetails={personalDetails}
              onChange={onChange}
              onApply={handleApply}
              onBack={handleBack}
            />
          ) : (
            <PersonalDetailsOverview
              personalDetails={personalDetails}
              onEdit={handleEdit}
            />
          )}
        </>
      )}
    </section>
  );
}

export default PersonalDetailsSection;
