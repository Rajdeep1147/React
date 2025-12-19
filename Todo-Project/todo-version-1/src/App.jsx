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

  const addNewItem = (itemName, itemDueDate) => {
    settodoItems((prevTodoItems) => [
      ...prevTodoItems,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const deteleItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deteleItem: deteleItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
