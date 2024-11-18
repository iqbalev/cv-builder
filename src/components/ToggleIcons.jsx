import ChevronIcon from "../assets/ChevronIcon.svg";
import MinIcon from "../assets/MinIcon.svg";
import PlusIcon from "../assets/PlusIcon.svg";
import styles from "../styles/ToggleIcons.module.css";

export function ChevronToggleIcon({ isOpen }) {
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

export function PlusMinToggleIcon({ isOpen }) {
  return (
    <img
      className={styles.plusMinIcon}
      src={isOpen ? MinIcon : PlusIcon}
      alt=""
    />
  );
}
