import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./components/Tooltip/Tooltip.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form />
    </div>
  );
}

export default App;
