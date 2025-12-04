import { useState } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  let intialTodoItems = [];

  let [todoItems, settodoItems] = useState(intialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log("New Item:", itemName, itemDueDate);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    settodoItems(newTodoItems);
  };

  const handleDeteleItem = (todoItemName) => {
    console.log("Delete Item at index:", todoItemName);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage todoItems={todoItems} />}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeteleItem} />
    </center>
  );
}

export default App;
