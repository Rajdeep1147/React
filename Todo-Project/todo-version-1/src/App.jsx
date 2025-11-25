import { useState } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  let todoItems = [
    { name: "Buy Milk", date: "04/10/2025" },
    { name: "Go College", date: "04/11/2025" },
    { name: "Go Office", date: "01/01/2026" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
