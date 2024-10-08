import { useState } from "react";
import styles from "../styles/EducationSection.module.css";
import formatDate from "../utils/formatDate.js";
import { ApplyButton, EditButton, ToggleButton } from "./Buttons.jsx";

function EducationSection({ education, onChange, onApply }) {
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
    <section className={styles.educationContainer}>
      <div className={styles.headingToggle}>
        <h2 className={styles.heading}>Education</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form className={styles.form} onSubmit={handleApply}>
              <label className={styles.label}>
                Field of Study
                <input
                  className={styles.input}
                  type="text"
                  name="fieldOfStudy"
                  placeholder="Computer Science"
                  value={education.fieldOfStudy}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                University
                <input
                  className={styles.input}
                  type="text"
                  name="university"
                  placeholder="Oxford University"
                  value={education.university}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Degree
                <input
                  className={styles.input}
                  type="text"
                  name="degree"
                  placeholder="BSc in Computer Science and Engineering"
                  value={education.degree}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Start Date
                <input
                  className={styles.input}
                  type="month"
                  name="startDate"
                  value={education.startDate}
                  placeholder="2018-09"
                  onChange={onChange}
                />
              </label>

              <div className={styles.endActive}>
                <label className={styles.label} htmlFor="education-end-date">
                  End Date
                </label>

                <div className={styles.isCurrentlyActive}>
                  <label
                    className={`${styles.label} ${styles.isCurrentlyActive}`}
                    htmlFor="education-is-currently-active"
                  >
                    Currently Active
                  </label>

                  <input
                    id="education-is-currently-active"
                    className={`${styles.input} ${styles.isCurrentlyActive}`}
                    type="checkbox"
                    name="isCurrentlyActive"
                    checked={education.isCurrentlyActive}
                    onChange={onChange}
                  />
                </div>

                <input
                  id="education-end-date"
                  className={styles.input}
                  type="month"
                  name="endDate"
                  value={education.endDate}
                  placeholder="2022-10"
                  onChange={onChange}
                  disabled={education.isCurrentlyActive}
                />
              </div>

              <div className={styles.button}>
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className={styles.overview}>
              <div className={styles.details}>
                <h4 className={styles.subHeading}>Field of Study</h4>
                <p className={styles.text}>{education.fieldOfStudy}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>University</h4>
                <p className={styles.text}>{education.university}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Degree</h4>
                <p className={styles.text}>{education.degree}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Start Date</h4>
                <p className={styles.text}>{formatDate(education.startDate)}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>End Date</h4>
                <p className={styles.text}>
                  {education.isCurrentlyActive
                    ? "Present"
                    : formatDate(education.endDate)}
                </p>
              </div>

              <div className={styles.button}>
                <EditButton onEdit={handleEdit} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default EducationSection;
