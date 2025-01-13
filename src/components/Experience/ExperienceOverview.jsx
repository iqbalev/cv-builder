import { EditButton, RemoveButton } from "../Buttons.jsx";
import formatDate from "../../utils/formatDate.js";
import styles from "../../styles/Overview.module.css";

function ExperienceOverview({ length, exp, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && (
        <div className={styles.headingButtons}>
          <h3 className={styles.heading}>{`Experience ${index + 1}`}</h3>
          <div className={styles.buttons}>
            <RemoveButton onRemove={onRemove} showIcon={true} />
            <EditButton onEdit={() => onEdit(index)} showIcon={true} />
          </div>
        </div>
      )}

      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Job Title</h4>
          <p className={styles.text}>
            {exp.jobTitle ? (
              exp.jobTitle
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Company</h4>
          <p className={styles.text}>
            {exp.company ? (
              exp.company
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Start Date</h4>
          <p className={styles.text}>
            {exp.startDate ? (
              formatDate(exp.startDate)
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>End Date</h4>
          <p className={styles.text}>
            {exp.isCurrentlyActive ? (
              "Present"
            ) : exp.endDate ? (
              formatDate(exp.endDate)
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <ul className={styles.details}>
          <h4 className={styles.subHeading}>Responsibilities</h4>
          {exp.responsibilities.map((responsibility, index) => (
            <li
              className={
                responsibility
                  ? `${styles.text} ${styles.list}`
                  : `${styles.text} ${styles.listNoStyle}`
              }
              key={index}
            >
              {responsibility ? (
                responsibility
              ) : (
                <span className={styles.notAvailable}>N/A</span>
              )}
            </li>
          ))}
        </ul>

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

export default ExperienceOverview;
