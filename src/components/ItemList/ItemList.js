import "./ItemList.css";

import { Item } from "../Item/Item";
import React from "react";

export const ItemList = ({ items }) => {
  return (
    <div className="container row my-5">
      <h2>Productos</h2>
      <hr />
      {items.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </div>
  );
};
