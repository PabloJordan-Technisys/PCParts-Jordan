import React, { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(items.map((el) => el.nombre));

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
