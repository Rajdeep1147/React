import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";
import Styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length == 0 && <h2 className={Styles.welcome}>Enjoy Your Day</h2>
  );
};
export default WelcomeMessage;
