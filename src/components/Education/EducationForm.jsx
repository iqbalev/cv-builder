import styles from "../../styles/Education/EducationForm.module.css";
import { ApplyButton, BackButton } from "../Buttons.jsx";

function EducationForm({ length, edu, index, onChange, onApply, onBack }) {
  return (
    <div className={styles.formContainer}>
      {length > 1 && (
        <div className={styles.headingButtons}>
          <h3 className={styles.heading}>{`Education ${index + 1}`}</h3>
          <div className={styles.buttons}>
            <ApplyButton onApply={(e) => onApply(e, index)} showIcon={true} />
            <BackButton onBack={onBack} showIcon={true} />
          </div>
        </div>
      )}

      <form className={styles.form} onSubmit={(e) => onApply(e, index)}>
        <label className={styles.label}>
          Field of Study
          <input
            className={styles.input}
            type="text"
            name="fieldOfStudy"
            placeholder="Computer Science"
            value={edu.fieldOfStudy}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          School
          <input
            className={styles.input}
            type="text"
            name="school"
            placeholder="Oxford University"
            value={edu.school}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Degree
          <input
            className={styles.input}
            type="text"
            name="degree"
            placeholder="BSc in Computer Science and Engineering"
            value={edu.degree}
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <label className={styles.label}>
          Start Date
          <input
            className={styles.input}
            type="month"
            name="startDate"
            value={edu.startDate}
            placeholder="2018-09"
            onChange={(e) => onChange(e, index)}
          />
        </label>

        <div className={styles.endActive}>
          <label
            className={styles.label}
            htmlFor={`education-end-date-${index}`}
          >
            End Date
          </label>

          <div className={styles.isCurrentlyActive}>
            <label
              className={`${styles.label} ${styles.isCurrentlyActive}`}
              htmlFor={`education-is-currently-active-${index}`}
            >
              Currently Active
            </label>

            <input
              id={`education-is-currently-active-${index}`}
              className={`${styles.input} ${styles.isCurrentlyActive}`}
              type="checkbox"
              name="isCurrentlyActive"
              checked={edu.isCurrentlyActive}
              onChange={(e) => onChange(e, index)}
            />
          </div>

          <input
            id={`education-end-date-${index}`}
            className={styles.input}
            type="month"
            name="endDate"
            value={edu.endDate}
            placeholder="2022-10"
            onChange={(e) => onChange(e, index)}
            disabled={edu.isCurrentlyActive}
          />
        </div>

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

export default EducationForm;
