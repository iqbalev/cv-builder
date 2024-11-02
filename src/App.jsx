import { useState } from "react";
import "./App.css";
import EducationSection from "./components/Education/EducationSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import PersonalDetailsSection from "./components/PersonalDetails/PersonalDetailsSection";
import ResumePreview from "./components/ResumePreview";

function App() {
  /* 
  - These are the FINAL states that will be use when user clicks on apply button 
  - The data rendered on ResumePreview are comes from these states
  */
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "John Doe",
    jobTitle: "Fullstack Web Developer",
    phoneNumber: "5551234567",
    email: "johndoe@gmail.com",
    address: "New York, US",
  });

  const [education, setEducation] = useState([
    {
      fieldOfStudy: "Computer Science",
      school: "Oxford University",
      degree: "BSc in Computer Science and Engineering",
      startDate: "2018-09",
      isCurrentlyActive: false,
      endDate: "2022-10",
    },
  ]);

  const [experience, setExperience] = useState([
    {
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
    },
  ]);

  /* 
  - These are the TEMP states that will hold the data before the user clicks on apply button
  - They will allow user to make changes in edit mode without affecting the main states
  */
  const [tempPersonalDetails, setTempPersonalDetails] =
    useState(personalDetails);
  const [tempEducation, setTempEducation] = useState(education);
  const [tempExperience, setTempExperience] = useState(experience);

  function handleTempStatesChange(e, index, setState) {
    const { name, value, checked } = e.target;

    setState((prev) => {
      if (index !== undefined) {
        const updatedArray = [...prev];
        updatedArray[index] = {
          ...updatedArray[index],
          [name]:
            name === "isCurrentlyActive"
              ? checked
              : name === "responsibilities"
              ? value.split("\n")
              : value,
        };
        return updatedArray;
      }

      if (name === "isCurrentlyActive") {
        return { ...prev, [name]: checked };
      } else if (name === "responsibilities") {
        return { ...prev, [name]: value.split("\n") };
      } else {
        return { ...prev, [name]: value };
      }
    });
  }

  function handleStatesApply(setState, state, index) {
    if (index !== undefined) {
      setState((prev) => {
        const updatedArray = [...prev];
        updatedArray[index] = state[index];
        return updatedArray;
      });
    } else {
      setState(state);
    }
  }

  function handleAddEducation() {
    setTempEducation((prev) => [
      ...prev,
      {
        fieldOfStudy: "",
        school: "",
        degree: "",
        startDate: "",
        isCurrentlyActive: false,
        endDate: "",
      },
    ]);
  }

  function handleAddExperience() {
    setTempExperience((prev) => [
      ...prev,
      {
        jobTitle: "",
        company: "",
        startDate: "",
        isCurrentlyActive: false,
        endDate: "",
        responsibilities: [],
      },
    ]);
  }

  return (
    <main className="app-container">
      <div className="sections-container">
        <PersonalDetailsSection
          personalDetails={tempPersonalDetails}
          onChange={(e) =>
            handleTempStatesChange(e, undefined, setTempPersonalDetails)
          }
          onApply={() =>
            handleStatesApply(setPersonalDetails, tempPersonalDetails)
          }
        />

        <EducationSection
          education={tempEducation}
          onChange={(e, index) =>
            handleTempStatesChange(e, index, setTempEducation)
          }
          onApply={(index) =>
            handleStatesApply(setEducation, tempEducation, index)
          }
          onAdd={handleAddEducation}
        />

        <ExperienceSection
          experience={tempExperience}
          onChange={(e, index) =>
            handleTempStatesChange(e, index, setTempExperience)
          }
          onApply={(index) =>
            handleStatesApply(setExperience, tempExperience, index)
          }
          onAdd={handleAddExperience}
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
