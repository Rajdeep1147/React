import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles["item-container"]}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            tododate={items.date}
            todoname={items.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
