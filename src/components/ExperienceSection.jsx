import { useState } from "react";
import styles from "../styles/ExperienceSection.module.css";
import formatDate from "../utils/formatDate.js";
import { ApplyButton, EditButton, ToggleButton } from "./Buttons.jsx";

function ExperienceSection({ experience, onChange, onApply }) {
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
    <section className={styles.experienceContainer}>
      <div className={styles.headingToggle}>
        <h2 className={styles.heading}>Experience</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form className={styles.form} onSubmit={handleApply}>
              <label className={styles.label}>
                Job Title
                <input
                  className={styles.input}
                  type="text"
                  name="jobTitle"
                  placeholder="Frontend Web Developer"
                  value={experience.jobTitle}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Company
                <input
                  className={styles.input}
                  type="text"
                  name="company"
                  placeholder="Google"
                  value={experience.company}
                  onChange={onChange}
                />
              </label>

              <label className={styles.label}>
                Start Date
                <input
                  className={styles.input}
                  type="month"
                  name="startDate"
                  value={experience.startDate}
                  placeholder="2023-03"
                  onChange={onChange}
                />
              </label>

              <div className={styles.endActive}>
                <label className={styles.label} htmlFor="experience-end-date">
                  End Date
                </label>

                <div className={styles.isCurrentlyActive}>
                  <label
                    className={`${styles.label} ${styles.isCurrentlyActive}`}
                    htmlFor="experience-is-currently-active"
                  >
                    Currently Active
                  </label>

                  <input
                    id="experience-is-currently-active"
                    className={`${styles.input} ${styles.isCurrentlyActive}`}
                    type="checkbox"
                    name="isCurrentlyActive"
                    checked={experience.isCurrentlyActive}
                    onChange={onChange}
                  />
                </div>

                <input
                  id="experience-end-date"
                  className={styles.input}
                  type="month"
                  name="endDate"
                  value={experience.endDate}
                  placeholder="2022-10"
                  onChange={onChange}
                  disabled={experience.isCurrentlyActive}
                />
              </div>

              <label className={styles.label}>
                Responsibilities
                <textarea
                  className={styles.textarea}
                  name="responsibilities"
                  value={experience.responsibilities.join("\n")}
                  onChange={onChange}
                ></textarea>
              </label>

              <div className={styles.button}>
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className={styles.overview}>
              <div className={styles.details}>
                <h4 className={styles.subHeading}>Job Title</h4>
                <p className={styles.text}>{experience.jobTitle}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Company</h4>
                <p className={styles.text}>{experience.company}</p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>Start Date</h4>
                <p className={styles.text}>
                  {formatDate(experience.startDate)}
                </p>
              </div>

              <div className={styles.details}>
                <h4 className={styles.subHeading}>End Date</h4>
                <p className={styles.text}>
                  {experience.isCurrentlyActive
                    ? "Present"
                    : formatDate(experience.endDate)}
                </p>
              </div>

              <ul className={styles.details}>
                <h4 className={styles.subHeading}>Responsibilities</h4>
                {experience.responsibilities.map((responsibility, index) => (
                  <li className={styles.text} key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>

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

export default ExperienceSection;
