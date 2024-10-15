import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./components/Tooltip/Tooltip.css";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Top language",
      text: "JavaScript",
    },
    {
      id: 2,
      title: "Top framework",
      text: "React",
    },
  ]);

  return (
    <div className="App ">
      <Navbar />
      <main>
        <Sidebar />
        <Form />
        <Notes notes={notes} />
        <Modal />
      </main>
    </div>
  );
}

export default App;
