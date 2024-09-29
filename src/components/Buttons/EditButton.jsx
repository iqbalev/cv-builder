import "../../styles/Buttons.css";

function EditButton({ handleEdit }) {
  return (
    <>
      <button className="edit-button" type="button" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
}

export default EditButton;
