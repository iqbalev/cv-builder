import styles from "../styles/Buttons.module.css";

export function AddButton({ onAdd }) {
  return (
    <button className={styles.addButton} type="button" onClick={onAdd}>
      + Add New Entry
    </button>
  );
}

export function BackButton({ onBack }) {
  return (
    <button className={styles.backButton} type="button" onClick={onBack}>
      Back
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

export function EditButton({ onEdit }) {
  return (
    <button className={styles.editButton} type="button" onClick={onEdit}>
      Edit
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
