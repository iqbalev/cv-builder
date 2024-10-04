import { useState } from "react";
import "../../styles/Forms.css";
import formatDate from "../../utils/formatDate.js";
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
              <label className="job-title-label">
                Job Title
                <input
                  className="job-title-input"
                  type="text"
                  name="jobTitle"
                  placeholder="Frontend Web Developer"
                  value={experience.jobTitle}
                  onChange={onChange}
                />
              </label>

              <label className="company-label">
                Company
                <input
                  className="company-input"
                  type="text"
                  name="company"
                  placeholder="Google"
                  value={experience.company}
                  onChange={onChange}
                />
              </label>

              <label className="start-date-label">
                Start Date
                <input
                  className="start-date-input"
                  type="month"
                  name="startDate"
                  value={experience.startDate}
                  placeholder="2023-03"
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
                    checked={experience.isCurrentlyActive}
                    onChange={onChange}
                  />
                </div>

                <input
                  id="end-date"
                  className="end-date-input"
                  type="month"
                  name="endDate"
                  value={experience.endDate}
                  placeholder="2022-10"
                  onChange={onChange}
                  disabled={experience.isCurrentlyActive}
                />
              </div>

              <label className="responsibilities-label">
                Responsibilities
                <textarea
                  className="responsibilities-textarea"
                  name="responsibilities"
                  value={experience.responsibilities.join("\n")}
                  onChange={onChange}
                ></textarea>
              </label>

              <div className="experience-form-buttons">
                <ApplyButton />
              </div>
            </form>
          ) : (
            <div className="experience-form-overview">
              <div className="job-title-overview-container">
                <h4 className="job-title-overview-title">Job Title</h4>
                <p className="job-title-overview">{experience.jobTitle}</p>
              </div>

              <div className="company-overview-container">
                <h4 className="company-overview-title">Company</h4>
                <p className="company-overview">{experience.company}</p>
              </div>

              <div className="start-date-overview-container">
                <h4 className="start-date-overview-title">Start Date</h4>
                <p className="start-date-overview">
                  {formatDate(experience.startDate)}
                </p>
              </div>

              <div className="end-date-overview-container">
                <h4 className="end-date-overview-title">End Date</h4>
                <p className="end-date-overview">
                  {experience.isCurrentlyActive
                    ? "Present"
                    : formatDate(experience.endDate)}
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
