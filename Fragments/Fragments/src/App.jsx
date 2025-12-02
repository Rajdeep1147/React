import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItem] = useState([
    "Fruits",
    "Vegetables",
    "Nuts",
    "Seeds",
    "Whole Grains",
  ]);
  // useState[getValue, setValue] = useState(foodItem);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newItem = event.target.value;
      let newFoodItem = [...foodItems, newItem];
      setFoodItem(newFoodItem);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-center mb-4 food-heading">Healthy Food</h1>
        {/* Pass foodItems to children */}
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the List Of Healthy Foods That Are Good For Your Healthy</p>
      </Container> */}
    </>
  );
}

export default App;
