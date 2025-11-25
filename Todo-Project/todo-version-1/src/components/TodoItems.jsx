import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="item-container">
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
