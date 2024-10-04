import "../../styles/Buttons.css";

function EditButton({ onEdit }) {
  return (
    <button className="edit-button" type="button" onClick={onEdit}>
      Edit
    </button>
  );
}

export default EditButton;
