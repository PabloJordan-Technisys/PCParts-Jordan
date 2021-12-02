import React, { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  console.log(items.map((el) => el.nombre));

  useEffect(() => {
    pedirDatos()
      .then((resp) => {
        setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
