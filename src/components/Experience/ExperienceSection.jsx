import { useState } from "react";
import styles from "../../styles/Experience/ExperienceSection.module.css";
import { AddButton, ToggleButton } from "../Buttons.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import ExperienceOverview from "./ExperienceOverview.jsx";

function ExperienceSection({ experience, onChange, onApply, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(experience.map(() => false));

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
    <section className={styles.experienceContainer}>
      <div className={styles.headingAddToggle}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.addToggle}>
          <AddButton onAdd={onAdd} />
          <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
        </div>
      </div>
      {isOpen && (
        <>
          <div className={styles.formOverview}>
            {experience.map((exp, index) =>
              isEditing[index] ? (
                <ExperienceForm
                  key={index}
                  length={experience.length}
                  exp={exp}
                  index={index}
                  onChange={onChange}
                  onApply={handleApply}
                  onBack={() => handleBack(index)}
                />
              ) : (
                <ExperienceOverview
                  key={index}
                  length={experience.length}
                  exp={exp}
                  index={index}
                  onEdit={handleEdit}
                  onRemove={() => onRemove(index)}
                />
              )
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default ExperienceSection;
