import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCounter } from "../../Hooks/useCounter";
import { useNavigate } from "react-router";

export const ItemDetail = ({ item }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);
  const { counter, increment, decrement } = useCounter(1, item.stock, 0);
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    counter > 0 &&
      agregarAlCarrito({
        id: item.id,
        precio: item.precio,
        nombre: item.nombre,
        cantidad: counter,
      });
  };
  return (
    <div className="container card m-2 my-3">
      <img src={item.img} alt={item.nombre} />
      <div className="container my-1">
        <h3 className="d-flex justify-content-center">{item.nombre}</h3>
        <p className="d-flex justify-content-center">${item.precio}</p>
        <p className="d-flex justify-content-center">{item.desc}</p>
      </div>

      {!isInCart(item.id) ? (
        <ItemCount
          increment={increment}
          decrement={decrement}
          onAdd={handleAgregar}
          counter={counter}
          min={0}
          max={item.stock}
        />
      ) : (
        <Link to="/cart" className="btn btn-success my-3">
          Terminar Compra
        </Link>
      )}

      <button className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
