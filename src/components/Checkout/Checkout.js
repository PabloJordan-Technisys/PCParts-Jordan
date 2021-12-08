import React, { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "@firebase/firestore/lite";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/config";

export const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    mail: "",
    tel: "",
  });

  const [orderId, setOrderId] = useState(null);
  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
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

  const handleImputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.nombre.length > 8 &&
      values.mail.length > 10 &&
      values.tel.length > 8
    ) {
      generarOrden(values);
    } else {
      alert("Campos invalidos");
    }
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              className="form-control -my-2 mx-2"
              placeholder="Nombre y Apellido"
              value={values.nombre}
              onChange={handleImputChange}
            />
            <input
              type="mail"
              name="mail"
              className="form-control -my-2 mx-2"
              placeholder="mail"
              value={values.mail}
              onChange={handleImputChange}
            />
            <input
              type="tel"
              name="tel"
              className="form-control -my-2 mx-2"
              placeholder="telefono"
              values={values.tel}
              onChange={handleImputChange}
            />
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
};
