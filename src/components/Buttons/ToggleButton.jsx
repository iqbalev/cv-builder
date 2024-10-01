import "../../styles/Buttons.css";
import ChevronIcon from "../../assets/ChevronIcon.svg";

function ToggleButton({ isOpen, onToggle }) {
  return (
    <button className="toggle-button" onClick={onToggle}>
      <img
        className={isOpen ? "chevron-icon rotate" : "chevron-icon"}
        src={ChevronIcon}
        alt="Chevron Icon"
      />
    </button>
  );
}

export default ToggleButton;
