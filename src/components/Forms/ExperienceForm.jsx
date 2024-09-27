import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function ExperienceForm({ experience, handleChange }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="experience-form-container">
      <div className="experience-form-title-toggle">
        <h2 className="experience-form-title">Experience</h2>
        <ToggleButton handleToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <form className="experience-form-details">
          <label className="position-title-label">
            Position Title
            <input
              className="position-title-input"
              type="text"
              name="positionTitle"
              placeholder="Frontend Web Developer"
              value={experience.positionTitle}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>

          <label className="start-date-label">
            Start Date
            <input
              className="start-date-input"
              type="date"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
            />
          </label>

          <label className="end-date-label">
            End Date
            <input
              className="end-date-input"
              type="date"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
            />
          </label>

          <div className="experience-form-buttons">
            <EditButton />
            <ApplyButton />
          </div>
        </form>
      )}
    </section>
  );
}

export default ExperienceForm;
