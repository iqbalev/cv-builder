import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function ExperienceForm({ experience, onChange, onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleApply(e) {
    e.preventDefault();
    onApply();
    setIsEditing(false);
  }

  return (
    <section className="experience-form-container">
      <div className="experience-form-title-toggle">
        <h2 className="experience-form-title">Experience</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form className="experience-form-details" onSubmit={handleApply}>
              <label className="position-title-label">
                Position Title
                <input
                  className="position-title-input"
                  type="text"
                  name="positionTitle"
                  placeholder="Frontend Web Developer"
                  value={experience.positionTitle}
                  onChange={onChange}
                />
              </label>

              <label className="company-name-label">
                Company Name
                <input
                  className="company-name-input"
                  type="text"
                  name="companyName"
                  placeholder="Google"
                  value={experience.companyName}
                  onChange={onChange}
                />
              </label>

              <label className="responsibilities-label">
                Responsibilities
                <textarea
                  className="responsibilities-textarea"
                  name="responsibilities"
                  value={experience.responsibilities.join("\n")}
                  onChange={onChange}
                ></textarea>
              </label>

              <label className="start-date-label">
                Start Date
                <input
                  className="start-date-input"
                  type="date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={onChange}
                />
              </label>

              <label className="end-date-label">
                End Date
                <input
                  className="end-date-input"
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={onChange}
                />
              </label>

              <div className="experience-form-buttons">
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className="experience-form-overview">
              <div className="position-title-overview-container">
                <h4 className="position-title-overview-title">
                  Position Title
                </h4>
                <p className="position-title-overview">
                  {experience.positionTitle}
                </p>
              </div>

              <div className="company-name-overview-container">
                <h4 className="company-name-overview-title">Company Name</h4>
                <p className="company-name-overview">
                  {experience.companyName}
                </p>
              </div>

              <ul className="responsibility-overview-container">
                <h4 className="responsibilities-overview-title">
                  Responsibilities
                </h4>
                {experience.responsibilities.map((responsibility, index) => (
                  <li className="responsibilities-overview" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>

              <div className="start-date-overview-container">
                <h4 className="start-date-overview-title">Start Date</h4>
                <p className="start-date-overview">{experience.startDate}</p>
              </div>

              <div className="end-date-overview-container">
                <h4 className="end-date-overview-title">End Date</h4>
                <p className="end-date-overview">{experience.endDate}</p>
              </div>

              <div className="experience-form-buttons">
                <EditButton onEdit={handleEdit} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ExperienceForm;
