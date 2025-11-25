import Item from "./Item";

const FoodItems = ({ items }) => {
  // Ensure items is always an array

  return (
    <div>
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item) => (
            <Item key={item} foodItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodItems;
