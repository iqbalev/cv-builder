import styles from "../../styles/Project/ProjectOverview.module.css";
import { EditButton, RemoveButton } from "../Buttons.jsx";

function ProjectOverview({ length, proj, index, onEdit, onRemove }) {
  return (
    <div className={styles.overviewContainer}>
      {length > 1 && (
        <h3 className={styles.heading}>{`Project ${index + 1}`}</h3>
      )}
      <div className={styles.overview}>
        <div className={styles.details}>
          <h4 className={styles.subHeading}>Project Name</h4>
          <p className={styles.text}>
            {proj.projectName ? proj.projectName : "-"}
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
              "-"
            )}
          </p>
        </div>

        <div className={styles.details}>
          <h4 className={styles.subHeading}>Summary</h4>
          <p className={styles.text}>{proj.summary ? proj.summary : "-"}</p>
        </div>

        <div className={styles.button}>
          <RemoveButton onRemove={onRemove} />
          <EditButton onEdit={() => onEdit(index)} />
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
