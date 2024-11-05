import styles from "../../styles/Experience/ExperienceOverview.module.css";
import formatDate from "../../utils/formatDate.js";
import { EditButton, RemoveButton } from "../Buttons.jsx";

function ExperienceOverview({ length, exp, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && <h3>{`Experience ${index + 1}`}</h3>}
      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Job Title</h4>
          <p className={styles.text}>{exp.jobTitle ? exp.jobTitle : "-"}</p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Company</h4>
          <p className={styles.text}>{exp.company ? exp.company : "-"}</p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Start Date</h4>
          <p className={styles.text}>
            {exp.startDate ? formatDate(exp.startDate) : "-"}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>End Date</h4>
          <p className={styles.text}>
            {exp.isCurrentlyActive
              ? "Present"
              : exp.endDate
              ? formatDate(exp.endDate)
              : "-"}
          </p>
        </div>

        <ul className={styles.details}>
          <h4 className={styles.subHeading}>Responsibilities</h4>
          {exp.responsibilities.map((responsibility, index) => (
            <li className={styles.text} key={index}>
              {responsibility ? responsibility : "-"}
            </li>
          ))}
        </ul>

        <div className={styles.button}>
          <RemoveButton onRemove={onRemove} />
          <EditButton onEdit={() => onEdit(index)} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceOverview;
