import { EyeIcon, PencilIcon, TickIcon, TrashIcon } from "./Icons";
import styles from "../styles/Buttons.module.css";

export function AddButton({ onAdd }) {
  return (
    <button className={styles.addButton} type="button" onClick={onAdd}>
      + Add New Entry
    </button>
  );
}

export function BackButton({ onBack, showIcon }) {
  return (
    <button
      className={
        showIcon ? `${styles.backButton} ${styles.showIcon}` : styles.backButton
      }
      type="button"
      onClick={onBack}
    >
      {showIcon ? <EyeIcon /> : "Back"}
    </button>
  );
}

export function ApplyButton({ onApply, showIcon }) {
  return (
    <button
      className={
        showIcon
          ? `${styles.applyButton} ${styles.showIcon}`
          : styles.applyButton
      }
      type="submit"
      onClick={onApply}
    >
      {showIcon ? <TickIcon /> : "Apply"}
    </button>
  );
}

export function EditButton({ onEdit, showIcon }) {
  return (
    <button
      className={
        showIcon ? `${styles.editButton} ${styles.showIcon}` : styles.editButton
      }
      type="button"
      onClick={onEdit}
    >
      {showIcon ? <PencilIcon /> : "Edit"}
    </button>
  );
}

export function RemoveButton({ onRemove, showIcon }) {
  return (
    <button
      className={
        showIcon
          ? `${styles.removeButton} ${styles.showIcon}`
          : styles.removeButton
      }
      type="button"
      onClick={onRemove}
    >
      {showIcon ? <TrashIcon /> : "Remove"}
    </button>
  );
}
