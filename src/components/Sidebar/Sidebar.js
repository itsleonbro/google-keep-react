import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div class="sidebar">
        <div class="sidebar-item active-item">
          <span class="material-icons-outlined hover active">lightbulb</span>
          <span class="sidebar-text">Notes</span>
        </div>
        <div class="sidebar-item">
          <span class="material-icons-outlined hover">notifications</span>
          <span class="sidebar-text">Reminders</span>
        </div>
        <div class="sidebar-item">
          <span class="material-icons-outlined hover">edit</span>
          <span class="sidebar-text">Edit Labels</span>
        </div>
        <div class="sidebar-item">
          <span class="material-icons-outlined hover">archive</span>
          <span class="sidebar-text">Archive</span>
        </div>
        <div class="sidebar-item">
          <span class="material-icons-outlined hover">delete</span>
          <span class="sidebar-text">Trash</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
