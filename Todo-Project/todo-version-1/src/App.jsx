import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem1 from "./components/TodoItem1.jsx";
import TodoItem2 from "./components/TodoItem2.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
