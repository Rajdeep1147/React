import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const foodItems = ["Daal", "Green Vegetables", "Rice", "Roti"];
  // const foodItems = [];
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 food-heading">Healthy Food</h1>
      {/* Pass foodItems to children */}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </div>
  );
}

export default App;
