import React, { useState } from "react";

export const ItemCount = ({ stock = 5, inicial = 1 }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const handleRestar = () => {
    cantidad >= inicial && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };
  return (
    <div className="m-4 container">
      <button onClick={handleRestar} className="btn btn-outline-primary">
        -
      </button>
      <span className="mx-2">{cantidad}</span>
      <button onClick={handleSumar} className="btn btn-outline-primary">
        +
      </button>

      <div className="my-2">
        <button className="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
};
