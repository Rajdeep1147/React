import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setDueDate] = useState();

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={`form-control ${style["todo-Input"]}`}
            value={todoName}
            onChange={handleTodoNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control todo-Input"
            value={todoDate}
            onChange={handleTodoDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
