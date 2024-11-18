import { useState } from "react";
import { AddButton } from "../Buttons.jsx";
import { ChevronToggleIcon } from "../ToggleIcons.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import ExperienceOverview from "./ExperienceOverview.jsx";
import styles from "../../styles/Experience/ExperienceSection.module.css";

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
      <div className={styles.headingIcon} role="button" onClick={handleToggle}>
        <h2 className={styles.heading}>Experience</h2>
        <ChevronToggleIcon isOpen={isOpen} />
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
            <AddButton onAdd={onAdd} />
          </div>
        </>
      )}
    </section>
  );
}

export default ExperienceSection;
