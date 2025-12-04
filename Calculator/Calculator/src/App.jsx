import { Button } from "bootstrap";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
      return;
    } else if (buttonText === "=") {
      let result = eval(calval);
      setCalval(result);
    } else {
      console.log(calval + buttonText);
      setCalval(calval + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
