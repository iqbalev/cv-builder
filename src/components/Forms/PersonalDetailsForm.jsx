import "../../styles/Form.css";

function PersonalDetailsForm() {
  return (
    <div className="personal-details-form-container">
      <h2>Personal Details</h2>
      <form>
        <label>
          Full Name
          <input type="text" name="full-name" placeholder="Muhammad Iqbal" />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone-number" placeholder="+6285864945923" />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="muhammadiqbal.090300@gmail.com"
          />
        </label>

        <label>
          Address
          <input type="text" name="address" placeholder="Bandung, West Java" />
        </label>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
