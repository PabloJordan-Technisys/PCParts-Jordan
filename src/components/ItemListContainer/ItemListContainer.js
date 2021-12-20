import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { db } from "../../Firebase/config";
import { useParams } from "react-router";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    //referencia a la coleccion
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container">
      {loading ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};
