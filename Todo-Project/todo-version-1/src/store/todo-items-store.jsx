import { createContext, useReducer } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

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
  } else if (action.type === "DELETE_ITEM") {
    const newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
    return newTodoItems;
  }
  return currentTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
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
      type: "DELETE_ITEM",
      payload: { name: todoItemName },
    };
    dispatchTodoItem(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
export { TodoItemsContext };