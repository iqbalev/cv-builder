import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "John Doe",
    jobTitle: "Fullstack Web Developer",
    phoneNumber: "5551234567",
    email: "johndoe@gmail.com",
    address: "New York, US",
  });

  const [tempPersonalDetails, setTempPersonalDetails] =
    useState(personalDetails);

  const [education, setEducation] = useState({
    fieldOfStudy: "Computer Science",
    university: "Oxford University",
    degree: "BSc in Computer Science and Engineering",
    startDate: "2018-09",
    isCurrentlyActive: false,
    endDate: "2022-10",
  });

  const [tempEducation, setTempEducation] = useState(education);

  const [experience, setExperience] = useState({
    jobTitle: "Frontend Web Developer",
    company: "Google",
    startDate: "2023-03",
    isCurrentlyActive: false,
    endDate: "2024-01",
    responsibilities: [
      "Implementing UI/UX designs provided by the design team",
      "Consuming and rendering APIs from the backend",
      "Creating a responsive and interactive website",
    ],
  });

  const [tempExperience, setTempExperience] = useState(experience);

  function handleTempStatesChange(e, setState) {
    const { name, value, checked } = e.target;

    if (name === "isCurrentlyActive") {
      setState((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "responsibilities") {
      setState((prev) => ({ ...prev, [name]: value.split("\n") }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleStatesApply(setState, state) {
    setState(state);
  }

  return (
    <main className="app-container">
      <div className="sections-container">
        <PersonalDetailsSection
          personalDetails={tempPersonalDetails}
          onChange={(e) => handleTempStatesChange(e, setTempPersonalDetails)}
          onApply={() =>
            handleStatesApply(setPersonalDetails, tempPersonalDetails)
          }
        />
        <EducationSection
          education={tempEducation}
          onChange={(e) => handleTempStatesChange(e, setTempEducation)}
          onApply={() => handleStatesApply(setEducation, tempEducation)}
        />
        <ExperienceSection
          experience={tempExperience}
          onChange={(e) => handleTempStatesChange(e, setTempExperience)}
          onApply={() => handleStatesApply(setExperience, tempExperience)}
        />
      </div>

      <div className="resume-preview-container">
        <ResumePreview
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
      </div>
    </main>
  );
}

export default App;
