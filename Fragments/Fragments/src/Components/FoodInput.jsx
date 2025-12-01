import Styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter FoodItem Here"
      className={Styles.FoodInput}
      onChange={handleOnChange}
    />
  );
};
export default FoodInput;
