import { useState } from "react";
import styles from "../../styles/Education/EducationSection.module.css";
import { AddButton, ToggleButton } from "../Buttons.jsx";
import EducationForm from "./EducationForm.jsx";
import EducationOverview from "./EducationOverview.jsx";

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
    setIsEditing((prev) => {
      const newArray = [...prev];
      newArray[index] = false;
      return newArray;
    });
  }

  return (
    <section className={styles.educationContainer}>
      <div className={styles.headingAddToggle}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.addToggle}>
          <AddButton onAdd={onAdd} />
          <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
        </div>
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
                  onRemove={() => onRemove(index)}
                />
              ) : (
                <EducationOverview
                  key={index}
                  length={education.length}
                  edu={edu}
                  index={index}
                  onEdit={handleEdit}
                />
              )
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default EducationSection;
