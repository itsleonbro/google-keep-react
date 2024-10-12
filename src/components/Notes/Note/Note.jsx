import React from "react";
import "./Note.css";
import Tooltip from "../Tooltip/Tooltip";

const Note = ({ note, handleMouseOver, handleMouseOut }) => {
  return (
    <>
      <div
        className="note"
        id={note.id}
        onMouseOver={() => handleMouseOver(note.id)}
        onMouseOut={() => handleMouseOut(note.id)}
      >
        <span className="material-icons check-circle">check_circle</span>
        <div className="title">{note.title}</div>
        <div className="text">{note.text}</div>
        <div className="note-footer">
          <Tooltip icon="add_alert" text="Remind me" />
          <Tooltip icon="person_add" text="Collaborator" />
          <Tooltip icon="palette" text="Change Color" />
          <Tooltip icon="image" text="Add Image" />
          <Tooltip icon="archive" text="Archive" />
          <Tooltip icon="more_vert" text="More" />
        </div>
      </div>
    </>
  );
};

export default Note;
