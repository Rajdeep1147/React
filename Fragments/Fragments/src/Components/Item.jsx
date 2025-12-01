import styles from "./Item.module.css";
import React from "react";
const Item = ({ foodItem }) => {
  const handleBuy = (event) => {
    console.log(`${foodItem} Being Bought`);
  };
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => handleBuy(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
