import React, { useState } from "react";

//importing components
import Form from "./Components/From";
import TableContent from "./Components/TableContent";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <TableContent tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
