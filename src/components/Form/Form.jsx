import React from "react";
import "./Form.css";
import Tooltip from "../Tooltip/Tooltip";

const Form = () => {
  return (
    <>
      {/* Inactive Form */}
      <div className="form-container inactive-form">
        <form>
          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <Tooltip icon="check_box" text="New List" />

            <Tooltip icon="brush" text="New Drawing" />
            <Tooltip icon="image" text="New Image" />
          </div>
        </form>
      </div>

      {/* Active Form */}
      <div className="form-container active-form">
        <form className="form" id="form">
          <input
            id="note-title"
            type="text"
            className="note-title"
            placeholder="Title"
          />
          <input
            id="note-text"
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <div className="icons">
              <Tooltip icon="add_alert" text="Remind me" />
              <Tooltip icon="person_add" text="Collaborator" />
              <Tooltip icon="palette" text="Change Color" />
              <Tooltip icon="image" text="Add Image" />
              <Tooltip icon="archive" text="Archive" />
              <Tooltip icon="more_vert" text="More" />
              <Tooltip icon="undo" text="Undo" />
              <Tooltip icon="redo" text="Redo" />
            </div>
            <button type="button" className="close-btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
