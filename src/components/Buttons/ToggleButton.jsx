import "../../styles/Buttons.css";
import ChevronDownIcon from "../../assets/ChevronDownIcon.svg";
import ChevronUpIcon from "../../assets/ChevronUpIcon.svg";

function ToggleButton({ handleToggle, isOpen }) {
  return (
    <button className="toggle-button" onClick={handleToggle}>
      <img src={isOpen ? ChevronDownIcon : ChevronUpIcon} alt="Chevron Icon" />
    </button>
  );
}

export default ToggleButton;
