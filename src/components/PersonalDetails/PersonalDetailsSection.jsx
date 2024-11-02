import { useState } from "react";
import styles from "../../styles/PersonalDetails/PersonalDetailsSection.module.css";
import { ToggleButton } from "../Buttons.jsx";
import PersonalDetailsForm from "./PersonalDetailsForm.jsx";
import PersonalDetailsOverview from "./PersonalDetailsOverview.jsx";

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
            <PersonalDetailsForm
              personalDetails={personalDetails}
              onChange={onChange}
              onApply={handleApply}
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
