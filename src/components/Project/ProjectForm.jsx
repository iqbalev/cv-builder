import { ApplyButton, BackButton } from "../Buttons.jsx";
import styles from "../../styles/Form.module.css";

function ProjectForm({ length, proj, index, onChange, onApply, onBack }) {
  return (
    <div className={styles.formContainer}>
      {length > 1 && (
        <div className={styles.headingButtons}>
          <h3 className={styles.heading}>{`Project ${index + 1}`}</h3>
          <div className={styles.buttons}>
            <ApplyButton onApply={(e) => onApply(e, index)} showIcon={true} />
            <BackButton onBack={onBack} showIcon={true} />
          </div>
        </div>
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

        {length <= 1 && (
          <div className={styles.buttons}>
            <ApplyButton showIcon={false} />
            <BackButton onBack={onBack} showIcon={false} />
          </div>
        )}
      </form>
    </div>
  );
}

export default ProjectForm;
