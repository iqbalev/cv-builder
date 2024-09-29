import { useState } from "react";
import "./App.css";
import CVPreview from "./components/CVPreview";
import EducationForm from "./components/Forms/EducationForm";
import ExperienceForm from "./components/Forms/ExperienceForm";
import PersonalDetailsForm from "./components/Forms/PersonalDetailsForm";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "John Doe",
    appliedPosition: "Fullstack Web Developer",
    phoneNumber: "5551234567",
    email: "johndoe@gmail.com",
    address: "New York, US",
  });

  const [education, setEducation] = useState({
    fieldOfStudy: "Computer Science",
    universityName: "Massachusetts Institute of Technology",
    degreeTitle: "BSc in Computer Science and Engineering",
    startDate: "2018/01/01",
    endDate: "2022/01/01",
  });

  const [experience, setExperience] = useState({
    positionTitle: "Frontend Web Developer",
    companyName: "Google",
    responsibilities: [
      "Implementing UI/UX designs provided by the design team",
      "Consuming and rendering APIs from the backend",
      "Creating a responsive and interactive website",
    ],
    startDate: "2022/02/02",
    endDate: "Present",
  });

  function handlePersonalDetailsChange(e) {
    e.preventDefault();
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  }

  function handleEducationChange(e) {
    e.preventDefault();
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleExperienceChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "responsibilities") {
      setExperience({ ...experience, [name]: value.split("\n") });
    } else {
      setExperience({ ...experience, [name]: value });
    }
  }

  return (
    <main className="app-container">
      <div className="form-container">
        <PersonalDetailsForm
          personalDetails={personalDetails}
          handleChange={handlePersonalDetailsChange}
        />
        <EducationForm
          education={education}
          handleChange={handleEducationChange}
        />
        <ExperienceForm
          experience={experience}
          handleChange={handleExperienceChange}
        />
      </div>

      <div className="cv-preview-container">
        <CVPreview
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
      </div>
    </main>
  );
}
export default App;
