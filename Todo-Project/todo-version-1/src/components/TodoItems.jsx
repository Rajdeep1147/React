import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles["item-container"]}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.date}
            tododate={items.date}
            todoname={items.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
