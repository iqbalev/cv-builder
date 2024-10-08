import styles from "../styles/ResumePreview.module.css";
import AddressIcon from "../assets/AddressIcon.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import formatDate from "../utils/formatDate";

function ResumePreview({ personalDetails, education, experience }) {
  return (
    <>
      <section className={styles.personalDetailsContainer}>
        <div className={styles.nameTitle}>
          <p>{personalDetails.fullName}</p>
          <p>{personalDetails.jobTitle}</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.phone}>
            {personalDetails.phoneNumber && (
              <>
                <img
                  className={styles.phoneIcon}
                  src={PhoneIcon}
                  alt="Phone Icon"
                />
                <p>{personalDetails.phoneNumber}</p>
              </>
            )}
          </div>

          <div className={styles.email}>
            {personalDetails.email && (
              <>
                <img
                  className={styles.emailIcon}
                  src={EmailIcon}
                  alt="Email Icon"
                />
                <p>{personalDetails.email}</p>
              </>
            )}
          </div>

          <div className={styles.address}>
            {personalDetails.address && (
              <>
                <img
                  className={styles.addressIcon}
                  src={AddressIcon}
                  alt="Address Icon"
                />
                <p>{personalDetails.address}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className={styles.educationContainer}>
        <h2 className={styles.educationHeading}>Education</h2>
        <div className={styles.educationDetails}>
          <div className={styles.fieldUniversityDegree}>
            <p>{education.fieldOfStudy}</p>
            <div className={styles.universityDegree}>
              {education.university && (
                <p>
                  {education.university}, {education.degree}
                </p>
              )}
            </div>
          </div>

          <div className={styles.startEnd}>
            {education.startDate && (
              <p>
                {formatDate(education.startDate)}-
                {education.isCurrentlyActive
                  ? "Present"
                  : formatDate(education.endDate)}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className={styles.experienceContainer}>
        <h2 className={styles.experienceHeading}>Experience</h2>
        <div className={styles.experienceDetails}>
          <div className={styles.titleCompanyStartEnd}>
            <div className={styles.titleCompany}>
              <p>{experience.company}</p>
              <p>{experience.jobTitle}</p>
            </div>

            <div className={styles.startEnd}>
              {experience.startDate && (
                <p>
                  {formatDate(experience.startDate)}-
                  {experience.isCurrentlyActive
                    ? "Present"
                    : formatDate(experience.endDate)}
                </p>
              )}
            </div>
          </div>

          <ul className={styles.responsibilities}>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ResumePreview;
