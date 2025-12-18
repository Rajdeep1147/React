import { useState } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import TodoItemsContext from "./store/todo-items-store.jsx";

function App() {
  let intialTodoItems = [];

  let [todoItems, settodoItems] = useState(intialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    settodoItems((prevTodoItems) => [
      ...prevTodoItems,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const handleDeteleItem = (todoItemName) => {
    console.log("Delete Item at index:", todoItemName);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    settodoItems(newTodoItems);
  };

  const defaultTodoItems = [{ name: "Buy Ghee", date: "2024-07-01" }];

  return (
    <>
      <TodoItemsContext.Provider value={defaultTodoItems}>
        <center className="todo-container">
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMessage todoItems={todoItems} />
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeteleItem} />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
