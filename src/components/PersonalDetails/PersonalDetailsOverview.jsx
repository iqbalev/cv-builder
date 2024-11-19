import styles from "../../styles/PersonalDetails/PersonalDetailsOverview.module.css";
import { EditButton } from "../Buttons.jsx";

function PersonalDetailsOverview({ personalDetails, onEdit }) {
  return (
    <div className={styles.overview}>
      <div className={styles.details}>
        <h4 className={styles.subHeading}>Full Name</h4>
        <p className={styles.text}>
          {personalDetails.fullName ? (
            personalDetails.fullName
          ) : (
            <span className={styles.notAvailable}>N/A</span>
          )}
        </p>
      </div>

      <div className={styles.details}>
        <h4 className={styles.subHeading}>Job Title</h4>
        <p className={styles.text}>
          {personalDetails.jobTitle ? (
            personalDetails.jobTitle
          ) : (
            <span className={styles.notAvailable}>N/A</span>
          )}
        </p>
      </div>

      <div className={styles.details}>
        <h4 className={styles.subHeading}>Phone Number</h4>
        <p className={styles.text}>
          {personalDetails.phoneNumber ? (
            personalDetails.phoneNumber
          ) : (
            <span className={styles.notAvailable}>N/A</span>
          )}
        </p>
      </div>

      <div className={styles.details}>
        <h4 className={styles.subHeading}>Email</h4>
        <p className={styles.text}>
          {personalDetails.email ? (
            personalDetails.email
          ) : (
            <span className={styles.notAvailable}>N/A</span>
          )}
        </p>
      </div>

      <div className={styles.details}>
        <h4 className={styles.subHeading}>Address</h4>
        <p className={styles.text}>
          {personalDetails.address ? (
            personalDetails.address
          ) : (
            <span className={styles.notAvailable}>N/A</span>
          )}
        </p>
      </div>

      <div className={styles.buttons}>
        <EditButton onEdit={onEdit} />
      </div>
    </div>
  );
}

export default PersonalDetailsOverview;
