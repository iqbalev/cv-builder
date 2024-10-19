import ChevronIcon from "../assets/ChevronIcon.svg";
import styles from "../styles/Buttons.module.css";

export function ApplyButton() {
  return (
    <button className={styles.applyButton} type="submit">
      Apply
    </button>
  );
}

export function EditButton({ onEdit }) {
  return (
    <button className={styles.editButton} type="button" onClick={onEdit}>
      Edit
    </button>
  );
}

export function ToggleButton({ isOpen, onToggle }) {
  return (
    <button className={styles.toggleButton} onClick={onToggle}>
      <img
        className={
          isOpen ? `${styles.chevronIcon} ${styles.rotate}` : styles.chevronIcon
        }
        src={ChevronIcon}
        alt="Chevron Icon"
      />
    </button>
  );
}

export function AddButton({ onAdd }) {
  return (
    <button className={styles.addButton} type="button" onClick={onAdd}>
      Add
    </button>
  );
}
