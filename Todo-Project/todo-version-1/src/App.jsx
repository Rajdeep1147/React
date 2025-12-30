import { useReducer } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import TodoItemsContext from "./store/todo-items-store.jsx";

const todoItemsReducer = (currentTodoItems, action) => {
  if (action.type === "ADD_ITEM") {
    const newTodoItems = [
      ...currentTodoItems,
      {
        id: Date.now(),
        name: action.payload.name,
        date: action.payload.date,
      },
    ];
    return newTodoItems;
  }else if(action.type === "DELETE_ITEM"){
    const newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.name);
    return newTodoItems;
  }
  return currentTodoItems;
};
function App() {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItem = { 
      type: "ADD_ITEM", 
      payload: { name: itemName, date: itemDueDate },
    };
    dispatchTodoItem(newTodoItem);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type:"DELETE_ITEM",
      payload: { name: todoItemName },
    }
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
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
