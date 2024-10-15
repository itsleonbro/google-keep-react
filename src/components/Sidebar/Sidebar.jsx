import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-item active-item">
        <span className="material-icons-outlined hover active">
          lightbulb
        </span>
        {!isCollapsed && <span className="sidebar-text">Notes</span>}
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">notifications</span>
        {!isCollapsed && <span className="sidebar-text">Reminders</span>}
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">edit</span>
        {!isCollapsed && <span className="sidebar-text">Edit Labels</span>}
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">archive</span>
        {!isCollapsed && <span className="sidebar-text">Archive</span>}
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">delete</span>
        {!isCollapsed && <span className="sidebar-text">Trash</span>}
      </div>
    </div>
  );
};

export default Sidebar;
