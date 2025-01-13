import { ApplyButton, BackButton } from "../Buttons.jsx";
import styles from "../../styles/Form.module.css";

function PersonalDetailsForm({ personalDetails, onChange, onApply, onBack }) {
  return (
    <form className={styles.form} onSubmit={onApply}>
      <label className={styles.label}>
        Full Name
        <input
          className={styles.input}
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={personalDetails.fullName}
          onChange={onChange}
        />
      </label>

      <label className={styles.label}>
        Job Title
        <input
          className={styles.input}
          type="text"
          name="jobTitle"
          placeholder="Fullstack Web Developer"
          value={personalDetails.jobTitle}
          onChange={onChange}
        />
      </label>

      <label className={styles.label}>
        Phone Number
        <input
          className={styles.input}
          type="tel"
          name="phoneNumber"
          placeholder="5551234567"
          value={personalDetails.phoneNumber}
          onChange={onChange}
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={personalDetails.email}
          onChange={onChange}
        />
      </label>

      <label className={styles.label}>
        Address
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder="New York, US"
          value={personalDetails.address}
          onChange={onChange}
        />
      </label>

      <div className={styles.buttons}>
        <ApplyButton />
        <BackButton onBack={onBack} />
      </div>
    </form>
  );
}

export default PersonalDetailsForm;
