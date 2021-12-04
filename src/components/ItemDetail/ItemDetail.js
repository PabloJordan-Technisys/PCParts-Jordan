import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../Hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

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
    <div className="container m-2 my-3">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.precio}</p>
      <p>{item.desc}</p>

      {!isInCart(item.id) ? (
        <ItemCount
          increment={increment}
          decrement={decrement}
          onAdd={handleAgregar}
          counter={counter}
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
