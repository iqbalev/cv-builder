import "../../styles/Buttons.css";

function ApplyButton({ handleApply }) {
  return (
    <>
      <button className="apply-button" type="submit" onClick={handleApply}>
        Apply
      </button>
    </>
  );
}

export default ApplyButton;
