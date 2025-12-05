import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
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
