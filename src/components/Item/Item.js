import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.precio}</p>
      <p>{item.desc}</p>
      <p>Categoria: {item.category}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">
        Ver mas
      </Link>
    </div>
  );
};
