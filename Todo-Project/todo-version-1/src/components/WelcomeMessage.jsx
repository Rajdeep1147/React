import Styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length == 0 && <h2 className={Styles.welcome}>Enjoy Your Day</h2>
  );
};
export default WelcomeMessage;
