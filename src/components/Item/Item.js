import "./Item.css";

import { Link } from "react-router-dom";
import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <div className="container card">
        <img className="imagen" src={item.img} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p style={{ fontSize: 25 }}>${item.precio}</p>
        <p>{item.desc}</p>
        <p>Categoria: {item.category}</p>
        <Link to={`/detail/${item.id}`} className="btn btn-primary">
          Ver mas
        </Link>
      </div>
    </div>
  );
};
