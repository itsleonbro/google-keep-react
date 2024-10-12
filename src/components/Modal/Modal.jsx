import React from "react";
import "./Modal.css";
import Tooltip from "../Tooltip/Tooltip";

const Modal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="form-container">
            <form className="form" id="modal-form">
              <input
                id="modal-title"
                type="text"
                className="note-title"
                placeholder="Title"
              />
              <input
                id="modal-text"
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
                <button type="button" className="close-btn" id="modal-btn">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
