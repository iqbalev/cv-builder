import styles from "../../styles/Project/ProjectOverview.module.css";
import { EditButton, RemoveButton } from "../Buttons.jsx";

function ProjectOverview({ length, proj, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && (
        <div className={styles.headingButtons}>
          <h3 className={styles.heading}>{`Project ${index + 1}`}</h3>
          <div className={styles.buttons}>
            <RemoveButton onRemove={onRemove} showIcon={true} />
            <EditButton onEdit={() => onEdit(index)} showIcon={true} />
          </div>
        </div>
      )}

      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Project Name</h4>
          <p className={styles.text}>
            {proj.projectName ? (
              proj.projectName
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Link</h4>
          <p className={styles.text}>
            {proj.link ? (
              <a className={styles.link} href={proj.link}>
                {proj.link}
              </a>
            ) : (
              <span className={styles.notAvailable}>N/A</span>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Summary</h4>
          <p className={styles.text}>
            {proj.summary ? (
              proj.summary
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

export default ProjectOverview;
