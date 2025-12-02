import styles from "./Item.module.css";
import React from "react";
const Item = ({ foodItem, handleByButton }) => {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleByButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
