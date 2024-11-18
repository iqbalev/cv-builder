import { useState } from "react";
import { AddButton } from "../Buttons.jsx";
import { ChevronToggleIcon } from "../ToggleIcons.jsx";
import EducationForm from "./EducationForm.jsx";
import EducationOverview from "./EducationOverview.jsx";
import styles from "../../styles/Education/EducationSection.module.css";

function EducationSection({ education, onChange, onApply, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(education.map(() => false));

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleEdit(index) {
    setIsEditing((prev) => {
      const newArray = [...prev];
      newArray[index] = true;
      return newArray;
    });
  }

  function handleApply(e, index) {
    e.preventDefault();
    onApply(index);
  }

  function handleBack(index) {
    setIsEditing((prev) => {
      const newArray = [...prev];
      newArray[index] = false;
      return newArray;
    });
  }

  return (
    <section className={styles.educationContainer}>
      <div className={styles.headingIcon} role="button" onClick={handleToggle}>
        <h2 className={styles.heading}>Education</h2>
        <ChevronToggleIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          <div className={styles.formOverview}>
            {education.map((edu, index) =>
              isEditing[index] ? (
                <EducationForm
                  key={index}
                  length={education.length}
                  edu={edu}
                  index={index}
                  onChange={onChange}
                  onApply={handleApply}
                  onBack={() => handleBack(index)}
                />
              ) : (
                <EducationOverview
                  key={index}
                  length={education.length}
                  edu={edu}
                  index={index}
                  onEdit={handleEdit}
                  onRemove={() => onRemove(index)}
                />
              )
            )}
            <AddButton onAdd={onAdd} />
          </div>
        </>
      )}
    </section>
  );
}

export default EducationSection;
