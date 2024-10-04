import "../styles/CVPreview.css";
import AddressIcon from "../assets/AddressIcon.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import TelephoneIcon from "../assets/TelephoneIcon.svg";
import formatDate from "../utils/formatDate";

function CVPreview({ personalDetails, education, experience }) {
  return (
    <>
      <section className="personal-details-preview-container">
        <div className="name-title">
          <p>{personalDetails.fullName}</p>
          <p>{personalDetails.jobTitle}</p>
        </div>

        <div className="phone-email-address">
          <div className="phone">
            {personalDetails.phoneNumber && (
              <>
                <img src={TelephoneIcon} alt="telephone-icon" />
                <p>{personalDetails.phoneNumber}</p>
              </>
            )}
          </div>

          <div className="email">
            {personalDetails.email && (
              <>
                <img src={EmailIcon} alt="email-icon" />
                <p>{personalDetails.email}</p>
              </>
            )}
          </div>

          <div className="address">
            {personalDetails.address && (
              <>
                <img src={AddressIcon} alt="address-icon" />
                <p>{personalDetails.address}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="education-preview-container">
        <h2 className="education-preview-title">Education</h2>
        <div className="education-preview-details">
          <div className="field-university-degree">
            <p>{education.fieldOfStudy}</p>
            <div className="university-degree">
              {education.university && (
                <p>
                  {education.university}, {education.degree}
                </p>
              )}
            </div>
          </div>

          <div className="start-end">
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

      <section className="experience-preview-container">
        <h2 className="experience-preview-title">Experience</h2>
        <div className="experience-preview-details">
          <div className="title-company-start-end">
            <div className="title-company">
              <p>{experience.company}</p>
              <p>{experience.jobTitle}</p>
            </div>

            <div className="start-end">
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

          <ul className="responsibilities">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CVPreview;
