import { useState } from "react";
import "./App.css";
import EducationSection from "./components/Education/EducationSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import PersonalDetailsSection from "./components/PersonalDetails/PersonalDetailsSection";
import ProjectSection from "./components/Project/ProjectSection";
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

  const [project, setProject] = useState([
    {
      projectName: "CV Builder",
      link: "http://localhost:5173/",
      summary:
        "A dynamic CV Builder. Developed with React.js to maintain a responsive and interactive user experience.",
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
  const [tempProject, setTempProject] = useState(project);

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
        responsibilities: [""],
      },
    ]);
  }

  function handleAddProject() {
    setTempProject((prev) => [
      ...prev,
      {
        projectName: "",
        link: "",
        summary: "",
      },
    ]);
  }

  function handleRemoveEducation(indexToRemove) {
    setTempEducation((prev) => {
      const removedEducation = prev.filter(
        (_, index) => index !== indexToRemove
      );
      const updatedEducation = removedEducation;
      handleStatesApply(setEducation, updatedEducation);
      return updatedEducation;
    });
  }

  function handleRemoveExperience(indexToRemove) {
    setTempExperience((prev) => {
      const removedExperience = prev.filter(
        (_, index) => index !== indexToRemove
      );
      const updatedExperience = removedExperience;
      handleStatesApply(setExperience, updatedExperience);
      return updatedExperience;
    });
  }

  function handleRemoveProject(indexToRemove) {
    setTempProject((prev) => {
      const removedProject = prev.filter((_, index) => index !== indexToRemove);
      const updatedProject = removedProject;
      handleStatesApply(setProject, updatedProject);
      return updatedProject;
    });
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
          onRemove={handleRemoveEducation}
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
          onRemove={handleRemoveExperience}
        />

        <ProjectSection
          project={tempProject}
          onChange={(e, index) =>
            handleTempStatesChange(e, index, setTempProject)
          }
          onApply={(index) => handleStatesApply(setProject, tempProject, index)}
          onAdd={handleAddProject}
          onRemove={handleRemoveProject}
        />
      </div>

      <div className="resume-preview-container">
        <ResumePreview
          personalDetails={personalDetails}
          education={education}
          experience={experience}
          project={project}
        />
      </div>
    </main>
  );
}

export default App;
