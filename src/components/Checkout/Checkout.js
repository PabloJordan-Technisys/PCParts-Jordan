import React, { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "@firebase/firestore/lite";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/config";

export const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const generarOrden = () => {
    const order = {
      buyer: {
        name: "nombre cliente",
        mail: "test@mail.com",
        tel: "1122556688",
      },
      items: cart,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
      vaciarCarrito();
    });
  };
  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <h2>Gracias por su compra!!</h2>
          <p>Su numero de compra es: {orderId}</p>

          <Link to="/" className="btn btn-success">
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Resumen de Compra</h2>
          <hr />

          <button onClick={generarOrden}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};
