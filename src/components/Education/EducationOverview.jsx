import styles from "../../styles/Education/EducationOverview.module.css";
import formatDate from "../../utils/formatDate.js";
import { EditButton, RemoveButton } from "../Buttons.jsx";

function EducationOverview({ length, edu, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && (
        <h3 className={styles.heading}>{`Education ${index + 1}`}</h3>
      )}
      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Field of Study</h4>
          <p className={styles.text}>
            {edu.fieldOfStudy ? edu.fieldOfStudy : "-"}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>School</h4>
          <p className={styles.text}>{edu.school ? edu.school : "-"}</p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Degree</h4>
          <p className={styles.text}>{edu.degree ? edu.degree : "-"}</p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Start Date</h4>
          <p className={styles.text}>
            {edu.startDate ? formatDate(edu.startDate) : "-"}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>End Date</h4>
          <p className={styles.text}>
            {edu.isCurrentlyActive
              ? "Present"
              : edu.endDate
              ? formatDate(edu.endDate)
              : "-"}
          </p>
        </div>

        <div className={styles.button}>
          <RemoveButton onRemove={onRemove} />
          <EditButton onEdit={() => onEdit(index)} />
        </div>
      </div>
    </div>
  );
}

export default EducationOverview;
