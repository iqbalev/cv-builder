import styles from "../../styles/Project/ProjectForm.module.css";
import { ApplyButton, BackButton } from "../Buttons.jsx";

function ProjectForm({ length, proj, index, onChange, onApply, onBack }) {
  return (
    <div className={styles.formContainer}>
      {length > 1 && (
        <h3 className={styles.heading}>{`Project ${index + 1}`}</h3>
      )}
      <form className={styles.form} onSubmit={(e) => onApply(e, index)}>
        <label className={styles.label}>
          Project Name
          <input
            className={styles.input}
            type="text"
            name="projectName"
            placeholder="CV Builder"
            value={proj.projectName}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Link
          <input
            className={styles.input}
            type="url"
            name="link"
            placeholder="http://localhost:5173/"
            value={proj.link}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Summary
          <textarea
            className={styles.textarea}
            name="summary"
            placeholder="A dynamic CV Builder. Developed with React.js to maintain a responsive and interactive user experience."
            value={proj.summary}
            onChange={(e) => onChange(e, index)}
          ></textarea>
        </label>

        <div className={styles.button}>
          <ApplyButton />
          <BackButton onBack={onBack} />
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
