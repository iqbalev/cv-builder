import { useState } from "react";
import "../../styles/Forms.css";
import ApplyButton from "../Buttons/ApplyButton.jsx";
import EditButton from "../Buttons/EditButton.jsx";
import ToggleButton from "../Buttons/ToggleButton.jsx";

function EducationForm({ education, onChange, onApply }) {
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
    <section className="education-form-container">
      <div className="education-form-title-toggle">
        <h2 className="education-form-title">Education</h2>
        <ToggleButton onToggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          {isEditing ? (
            <form className="education-form-details" onSubmit={handleApply}>
              <label className="field-of-study-label">
                Field of Study
                <input
                  className="field-of-study-input"
                  type="text"
                  name="fieldOfStudy"
                  placeholder="Computer Science"
                  value={education.fieldOfStudy}
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </label>

              <label className="start-date-label">
                Start Date
                <input
                  className="start-date-input"
                  type="date"
                  name="startDate"
                  value={education.startDate}
                  onChange={onChange}
                />
              </label>

              <label className="end-date-label">
                End Date
                <input
                  className="end-date-input"
                  type="date"
                  name="endDate"
                  value={education.endDate}
                  onChange={onChange}
                />
              </label>

              <div className="education-form-buttons">
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className="education-form-overview">
              <div className="field-of-study-overview-container">
                <h4 className="field-of-study-overview-title">
                  Field of Study
                </h4>
                <p className="field-of-study-overview">
                  {education.fieldOfStudy}
                </p>
              </div>

              <div className="university-name-overview-container">
                <h4 className="university-name-overview-title">
                  University Name
                </h4>
                <p className="university-name-overview">
                  {education.universityName}
                </p>
              </div>

              <div className="degree-title-overview-container">
                <h4 className="degree-title-overview-title">Degree Title</h4>
                <p className="degree-title-overview">{education.degreeTitle}</p>
              </div>

              <div className="start-date-overview-container">
                <h4 className="start-date-overview-title">Start Date</h4>
                <p className="start-date-overview">{education.startDate}</p>
              </div>

              <div className="end-date-overview-container">
                <h4 className="end-date-overview-title">End Date</h4>
                <p className="end-date-overview">{education.endDate}</p>
              </div>

              <div className="education-form-buttons">
                <EditButton onEdit={handleEdit} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default EducationForm;
