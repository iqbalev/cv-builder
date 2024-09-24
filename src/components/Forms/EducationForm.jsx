import "../../styles/Form.css";

function EducationForm() {
  return (
    <div className="education-form-container">
      <h2>Education</h2>
      <form>
        <label>
          University Name
          <input
            type="text"
            name="university-name"
            placeholder="UIN Sunan Gunung Djati Bandung"
          />
        </label>

        <label>
          Degree Title
          <input
            type="text"
            name="degree-title"
            placeholder="BSc in Sociology"
          />
        </label>

        <label>
          Start Date
          <input type="date" name="start-date" />
        </label>

        <label>
          End Date
          <input type="date" name="end-date" />
        </label>
      </form>
    </div>
  );
}

export default EducationForm;
