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

  const [tempPersonalDetails, setTempPersonalDetails] =
    useState(personalDetails);

  const [education, setEducation] = useState({
    fieldOfStudy: "Computer Science",
    universityName: "Massachusetts Institute of Technology",
    degreeTitle: "BSc in Computer Science and Engineering",
    startDate: "2018/01/01",
    endDate: "2022/01/01",
  });

  const [tempEducation, setTempEducation] = useState(education);

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

  const [tempExperience, setTempExperience] = useState(experience);

  function handleTempStatesChange(e, setState) {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "responsibilities") {
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
      <div className="form-container">
        <PersonalDetailsForm
          personalDetails={tempPersonalDetails}
          onChange={(e) => handleTempStatesChange(e, setTempPersonalDetails)}
          onApply={() =>
            handleStatesApply(setPersonalDetails, tempPersonalDetails)
          }
        />
        <EducationForm
          education={tempEducation}
          onChange={(e) => handleTempStatesChange(e, setTempEducation)}
          onApply={() => handleStatesApply(setEducation, tempEducation)}
        />
        <ExperienceForm
          experience={tempExperience}
          onChange={(e) => handleTempStatesChange(e, setTempExperience)}
          onApply={() => handleStatesApply(setExperience, tempExperience)}
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
