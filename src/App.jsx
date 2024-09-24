import "./App.css";
import PersonalDetailsForm from "./components/Forms/PersonalDetailsForm";
import EducationForm from "./components/Forms/EducationForm";
import ExperienceForm from "./components/Forms/ExperienceForm";
import CVPreview from "./components/CVPreview";

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <PersonalDetailsForm />
        <EducationForm />
        <ExperienceForm />
      </div>

      <div className="cv-preview-container">
        <CVPreview />
      </div>
    </div>
  );
}
export default App;
