import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";
export const CartView = () => {
  const { cart, vaciarCarrito, totalCompra, removerDelCarrito } =
    useContext(CartContext);
  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <>
          <h2>Tu carrito esta vacio</h2>
          <Link className="btn btn-success" to="/">
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Carrito</h2>
          <hr />

          {cart.map((el) => (
            <div key={el.id}>
              <h3>{el.nombre}</h3>
              <p>Precio: ${el.precio}</p>
              <p>Cantidad: {el.cantidad}</p>
              <button
                onClick={() => {
                  removerDelCarrito(el.id);
                }}
                className="btn btn-danger"
              >
                <BsTrash />
              </button>
            </div>
          ))}

          <hr />
          <h4>Total: ${totalCompra()}</h4>
          <button onClick={vaciarCarrito} className="btn btn-danger">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="btn btn-success mx-3">
            Terminar Compra
          </Link>
        </>
      )}
    </div>
  );
};
