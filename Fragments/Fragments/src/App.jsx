import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  const foodItems = ["Daal", "Green Vegetables", "Rice", "Roti"];
  // const foodItems = [];
  return (
    <>
      <Container>
        <h1 className="text-center mb-4 food-heading">Healthy Food</h1>
        {/* Pass foodItems to children */}
        <ErrorMessage items={foodItems} />
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the List Of Healthy Foods That Are Good For Your Healthy</p>
      </Container> */}
    </>
  );
}

export default App;
