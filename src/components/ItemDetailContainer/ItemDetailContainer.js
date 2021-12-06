import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../Firebase/config";
import { collection, doc, getDoc } from "firebase/firestore/lite";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  return <div>{loading ? <Loader /> : <ItemDetail item={item} />}</div>;
};
