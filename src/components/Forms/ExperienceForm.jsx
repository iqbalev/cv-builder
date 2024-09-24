import "../../styles/Form.css";

function Experience() {
  return (
    <div className="experience-form-container">
      <h2>Experience</h2>
      <form>
        <label>
          Company Name
          <input type="text" name="company-name" placeholder="Google" />
        </label>

        <label>
          Position Title
          <input
            type="text"
            name="position-title"
            placeholder="Web Developer"
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

export default Experience;
