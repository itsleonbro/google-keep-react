import React from "react";

const Tooltip = ({ icon, text, onClick }) => {
  return (
    <div className="tooltip" onClick={onClick}>
      <span className="material-icons-outlined hover">{icon}</span>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
