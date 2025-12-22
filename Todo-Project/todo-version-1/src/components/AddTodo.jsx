import { useContext, useRef } from "react";
import style from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;
    addNewItem(todoName, todoDate);
    todoDateRef.current.value = "";
    todoNameRef.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameRef}
            placeholder="Enter Todo Here"
            className={`form-control ${style["todo-Input"]}`}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateRef}
            className="form-control todo-Input"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
