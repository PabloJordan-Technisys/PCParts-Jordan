export const ItemCount = ({
  increment,
  decrement,
  onAdd,
  counter,
  min,
  max,
}) => {
  return (
    <div className="m-4 container">
      <button
        onClick={decrement}
        className={
          counter === min ? "btn btn-outline-danger" : "btn btn-outline-primary"
        }
      >
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button
        onClick={increment}
        className={counter === max ? "btn btn-danger" : "btn btn-primary"}
      >
        +
      </button>

      <div className="my-2">
        <button
          className="btn btn-success"
          disabled={counter === min}
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
