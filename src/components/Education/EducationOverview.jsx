import { EditButton, RemoveButton } from "../Buttons.jsx";
import formatDate from "../../utils/formatDate.js";
import styles from "../../styles/Overview.module.css";

function EducationOverview({ length, edu, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && (
        <div className={styles.headingButtons}>
          <h3 className={styles.heading}>{`Education ${index + 1}`}</h3>
          <div className={styles.buttons}>
            <RemoveButton onRemove={onRemove} showIcon={true} />
            <EditButton onEdit={() => onEdit(index)} showIcon={true} />
          </div>
        </div>
      )}

      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Field of Study</h4>
          <p className={styles.text}>
            {edu.fieldOfStudy ? (
              edu.fieldOfStudy
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>School</h4>
          <p className={styles.text}>
            {edu.school ? (
              edu.school
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Degree</h4>
          <p className={styles.text}>
            {edu.degree ? (
              edu.degree
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Start Date</h4>
          <p className={styles.text}>
            {edu.startDate ? (
              formatDate(edu.startDate)
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>End Date</h4>
          <p className={styles.text}>
            {edu.isCurrentlyActive ? (
              "Present"
            ) : edu.endDate ? (
              formatDate(edu.endDate)
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        {length <= 1 && (
          <div className={styles.buttons}>
            <RemoveButton onRemove={onRemove} showIcon={false} />
            <EditButton onEdit={() => onEdit(index)} showIcon={false} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationOverview;
