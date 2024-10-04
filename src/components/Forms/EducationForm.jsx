import { useState } from "react";
import "../../styles/Forms.css";
import formatDate from "../../utils/formatDate.js";
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

              <label className="university-label">
                University
                <input
                  className="university-input"
                  type="text"
                  name="university"
                  placeholder="Oxford University"
                  value={education.university}
                  onChange={onChange}
                />
              </label>

              <label className="degree-label">
                Degree
                <input
                  className="degree-input"
                  type="text"
                  name="degree"
                  placeholder="BSc in Computer Science and Engineering"
                  value={education.degree}
                  onChange={onChange}
                />
              </label>

              <label className="start-date-label">
                Start Date
                <input
                  className="start-date-input"
                  type="month"
                  name="startDate"
                  value={education.startDate}
                  placeholder="2018-09"
                  onChange={onChange}
                />
              </label>

              <div className="end-active">
                <label className="end-date-label" htmlFor="end-date">
                  End Date
                </label>

                <div className="is-currently-active-label-input">
                  <label
                    className="is-currently-active-label"
                    htmlFor="is-currently-active"
                  >
                    Currently Active
                  </label>

                  <input
                    id="is-currently-active"
                    className="is-currently-active-input"
                    type="checkbox"
                    name="isCurrentlyActive"
                    checked={education.isCurrentlyActive}
                    onChange={onChange}
                  />
                </div>

                <input
                  id="end-date"
                  className="end-date-input"
                  type="month"
                  name="endDate"
                  value={education.endDate}
                  placeholder="2022-10"
                  onChange={onChange}
                  disabled={education.isCurrentlyActive}
                />
              </div>

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

              <div className="university-overview-container">
                <h4 className="university-overview-title">University</h4>
                <p className="university-overview">{education.university}</p>
              </div>

              <div className="degree-overview-container">
                <h4 className="degree-overview-title">Degree</h4>
                <p className="degree-overview">{education.degree}</p>
              </div>

              <div className="start-date-overview-container">
                <h4 className="start-date-overview-title">Start Date</h4>
                <p className="start-date-overview">
                  {formatDate(education.startDate)}
                </p>
              </div>

              <div className="end-date-overview-container">
                <h4 className="end-date-overview-title">End Date</h4>
                <p className="end-date-overview">
                  {education.isCurrentlyActive
                    ? "Present"
                    : formatDate(education.endDate)}
                </p>
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
