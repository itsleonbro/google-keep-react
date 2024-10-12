import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./components/Tooltip/Tooltip.css";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <main>
        <Sidebar />
        <Form />
        <Modal />
      </main>
    </div>
  );
}

export default App;
