import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "=",
    "/",
    "0",
    "*",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonsNames.map((btnName) => (
        <button
          key={btnName}
          className={styles.button}
          onClick={() => onButtonClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
