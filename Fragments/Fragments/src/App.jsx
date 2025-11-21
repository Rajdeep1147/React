import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItmes = [];
  let foodItmes = ["Dall", "Green Vegetables", "Rice", "Roti"];
  // if (foodItmes.length === 0) {
  //   return <h3>I am Still Hungry</h3>;
  // }
  let emptyMessage = foodItmes.length === 0 && <h3>I am Still Hungry</h3>;
  return (
    <>
      <h1>Healthy Food </h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItmes.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
