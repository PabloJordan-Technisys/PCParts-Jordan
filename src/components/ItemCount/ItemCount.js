import { useCounter } from "../../Hooks/useCounter";

export const ItemCount = ({ stock = 5, inicial = 1 }) => {
  const { counter, increment, decrement } = useCounter(inicial, stock, 0);

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
        <button className="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
};
