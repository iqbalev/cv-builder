import ChevronIcon from "../assets/ChevronIcon.svg";
import styles from "../styles/ChevronIcon.module.css";

export function ChevronIconToggle({ isOpen }) {
  return (
    <img
      className={
        isOpen ? `${styles.chevronIcon} ${styles.rotate}` : styles.chevronIcon
      }
      src={ChevronIcon}
      alt="Chevron Icon"
    />
  );
}
