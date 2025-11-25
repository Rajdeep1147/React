const ErrorMessage = ({ items }) => {
  let emptyMessage = items.length === 0 ? "I am Hungry 😋" : null;
  return (
    <>
      {emptyMessage && (
        <h2 className="text-danger text-center">{emptyMessage}</h2>
      )}
    </>
  );
};
export default ErrorMessage;
