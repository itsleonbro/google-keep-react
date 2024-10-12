import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div class="form-container inactive-form">
        <form>
          <input class="note-text" type="text" placeholder="Take a note..." />
          <div class="form-actions">
            <div class="tooltip">
              <span class="material-icons-outlined hover">check_box</span>
              <span class="tooltip-text">New List</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover">brush</span>
              <span class="tooltip-text">New Drawing</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover">image</span>
              <span class="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
      </div>

      <div class="form-container active-form">
        <form class="form" id="form">
          <input
            id="note-title"
            type="text"
            class="note-title"
            placeholder="Title"
          />
          <input
            id="note-text"
            class="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div class="form-actions">
            <div class="icons">
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  add_alert
                </span>
                <span class="tooltip-text">Remind me</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  person_add
                </span>
                <span class="tooltip-text">Collaborator</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  palette
                </span>
                <span class="tooltip-text">Change Color</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  image
                </span>
                <span class="tooltip-text">Add Image</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  archive
                </span>
                <span class="tooltip-text">Archive</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  more_vert
                </span>
                <span class="tooltip-text">More</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  undo
                </span>
                <span class="tooltip-text">Undo</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  redo
                </span>
                <span class="tooltip-text">Redo</span>
              </div>
            </div>
            <button class="close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
