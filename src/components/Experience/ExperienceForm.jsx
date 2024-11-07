import styles from "../../styles/Experience/ExperienceForm.module.css";
import { ApplyButton, BackButton } from "../Buttons.jsx";

function ExperienceForm({ length, exp, index, onChange, onApply, onBack }) {
  return (
    <div className={styles.formContainer}>
      {length > 1 && (
        <h3 className={styles.heading}>{`Experience ${index + 1}`}</h3>
      )}
      <form className={styles.form} onSubmit={(e) => onApply(e, index)}>
        <label className={styles.label}>
          Job Title
          <input
            className={styles.input}
            type="text"
            name="jobTitle"
            placeholder="Frontend Web Developer"
            value={exp.jobTitle}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Company
          <input
            className={styles.input}
            type="text"
            name="company"
            placeholder="Google"
            value={exp.company}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Start Date
          <input
            className={styles.input}
            type="month"
            name="startDate"
            value={exp.startDate}
            placeholder="2023-03"
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <div className={styles.endActive}>
          <label
            className={styles.label}
            htmlFor={`experience-end-date-${index}`}
          >
            End Date
          </label>

          <div className={styles.isCurrentlyActive}>
            <label
              className={`${styles.label} ${styles.isCurrentlyActive}`}
              htmlFor={`experience-is-currently-active-${index}`}
            >
              Currently Active
            </label>

            <input
              id={`experience-is-currently-active-${index}`}
              className={`${styles.input} ${styles.isCurrentlyActive}`}
              type="checkbox"
              name="isCurrentlyActive"
              checked={exp.isCurrentlyActive}
              onChange={(e) => onChange(e, index)}
            />
          </div>

          <input
            id={`experience-end-date-${index}`}
            className={styles.input}
            type="month"
            name="endDate"
            value={exp.endDate}
            placeholder="2022-10"
            onChange={(e) => onChange(e, index)}
            disabled={exp.isCurrentlyActive}
          />
        </div>

        <label className={styles.label}>
          Responsibilities
          <textarea
            className={styles.textarea}
            name="responsibilities"
            value={exp.responsibilities.join("\n")}
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

export default ExperienceForm;
