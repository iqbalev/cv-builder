import "../../styles/Buttons.css";

function EditButton({ handleEdit }) {
  return (
    <>
      <button className="edit-button" type="submit" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
}

export default EditButton;
