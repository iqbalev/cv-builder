import { useState } from "react";
import { AddButton } from "../Buttons.jsx";
import { ChevronToggleIcon } from "../ToggleIcons.jsx";
import ProjectForm from "./ProjectForm.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import styles from "../../styles/Project/ProjectSection.module.css";

function ProjectSection({ project, onChange, onApply, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(project.map(() => false));

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
    <section className={styles.projectContainer}>
      <div className={styles.headingIcon} role="button" onClick={handleToggle}>
        <h2 className={styles.heading}>Project</h2>
        <ChevronToggleIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          <div className={styles.formOverview}>
            {project.map((proj, index) =>
              isEditing[index] ? (
                <ProjectForm
                  key={index}
                  length={project.length}
                  proj={proj}
                  index={index}
                  onChange={onChange}
                  onApply={handleApply}
                  onBack={() => handleBack(index)}
                />
              ) : (
                <ProjectOverview
                  key={index}
                  length={project.length}
                  proj={proj}
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

export default ProjectSection;
