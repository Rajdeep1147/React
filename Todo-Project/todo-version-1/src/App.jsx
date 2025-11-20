import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName.jsx";
import "./App.css";
import AddTodo from "./components/AddTodo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">04/10/2025</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Go To College</div>
          <div className="col-4">04/10/2025</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
