import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function EducationForm({ education, handleChange }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="education-form-container">
      <div className="education-form-title-toggle">
        <h2 className="education-form-title">Education</h2>
        <ToggleButton handleToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <form className="education-form-details">
          <label className="field-of-study-label">
            Field of Study
            <input
              className="field-of-study-input"
              type="text"
              name="fieldOfStudy"
              placeholder="Computer Science"
              value={education.fieldOfStudy}
              onChange={handleChange}
            />
          </label>

          <label className="university-name-label">
            University Name
            <input
              className="university-name-input"
              type="text"
              name="universityName"
              placeholder="Massachusetts Institute of Technology"
              value={education.universityName}
              onChange={handleChange}
            />
          </label>

          <label className="degree-title-label">
            Degree Title
            <input
              className="degree-title-input"
              type="text"
              name="degreeTitle"
              placeholder="BSc in Computer Science and Engineering"
              value={education.degreeTitle}
              onChange={handleChange}
            />
          </label>

          <label className="start-date-label">
            Start Date
            <input
              className="start-date-input"
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
            />
          </label>

          <label className="end-date-label">
            End Date
            <input
              className="end-date-input"
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
            />
          </label>

          <div className="education-form-buttons">
            <EditButton />
            <ApplyButton />
          </div>
        </form>
      )}
    </section>
  );
}

export default EducationForm;
