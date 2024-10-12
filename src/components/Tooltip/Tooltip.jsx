import React from "react";

const Tooltip = ({ icon, text }) => {
  return (
    <div className="tooltip">
      <span className="material-icons-outlined hover">{icon}</span>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
