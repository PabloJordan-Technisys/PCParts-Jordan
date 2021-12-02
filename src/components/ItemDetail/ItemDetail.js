import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <div className="container m-2 my-3">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.precio}</p>
      <p>{item.desc}</p>

      <ItemCount stock="10" />
    </div>
  );
};
