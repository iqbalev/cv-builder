import "../styles/CVPreview.css";
import AddressIcon from "../assets/AddressIcon.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import TelephoneIcon from "../assets/TelephoneIcon.svg";

function CVPreview({ personalDetails, education, experience }) {
  return (
    <>
      <section className="personal-details-preview-container">
        <div className="name-position">
          <p>{personalDetails.fullName}</p>
          <p>{personalDetails.appliedPosition}</p>
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
        <div className="education-details">
          <div className="field-university-degree">
            <p>{education.fieldOfStudy}</p>
            <div className="university-degree">
              {education.universityName && (
                <p>
                  {education.universityName}, {education.degreeTitle}
                </p>
              )}
            </div>
          </div>

          <div className="start-end">
            {education.startDate && (
              <p>
                {education.startDate}-{education.endDate}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="experience-preview-container">
        <h2 className="experience-preview-title">Experience</h2>
        <div className="experience-details">
          <div className="company-position">
            <p>{experience.positionTitle}</p>
            <p>{experience.companyName}</p>
          </div>

          <div className="start-end">
            {experience.startDate && (
              <p>
                {experience.startDate}-{experience.endDate}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default CVPreview;
