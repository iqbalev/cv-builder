import ChevronIcon from "../assets/ChevronIcon.svg";
import PlusIcon from "../assets/PlusIcon.svg";
import styles from "../styles/Buttons.module.css";

export function AddButton({ onAdd }) {
  return (
    <button className={styles.addButton} type="button" onClick={onAdd}>
      <img className={styles.plusIcon} src={PlusIcon} alt="Plus Icon" />
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

export function EditButton({ onEdit }) {
  return (
    <button className={styles.editButton} type="button" onClick={onEdit}>
      Edit
    </button>
  );
}

export function ApplyButton() {
  return (
    <button className={styles.applyButton} type="submit">
      Apply
    </button>
  );
}

export function CancelButton({ onCancel }) {
  return (
    <button className={styles.cancelButton} type="button" onClick={onCancel}>
      Cancel
    </button>
  );
}

export function RemoveButton({ onRemove }) {
  return (
    <button className={styles.removeButton} type="button" onClick={onRemove}>
      Remove
    </button>
  );
}
