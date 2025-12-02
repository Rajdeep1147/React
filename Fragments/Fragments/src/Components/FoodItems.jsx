import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  // Ensure items is always an array
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    if (activeItems.includes(item)) {
      let filteredItems = activeItems.filter(
        (activeItem) => activeItem !== item
      );
      setActiveItems(filteredItems);
    }
  };

  return (
    <div>
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item) => (
            <Item
              key={item}
              foodItem={item}
              bought={activeItems.includes(item)}
              handleByButton={(event) => onBuyButton(item, event)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodItems;
