export const ItemCount = ({ increment, decrement, onAdd, counter }) => {
  return (
    <div className="m-4 container">
      <button onClick={decrement} className="btn btn-outline-primary">
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={increment} className="btn btn-outline-primary">
        +
      </button>

      <div className="my-2">
        <button className="btn btn-success" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
