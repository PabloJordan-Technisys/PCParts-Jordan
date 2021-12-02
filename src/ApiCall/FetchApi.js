import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useFetch } from "../Hooks/useFetch";

export const FetchApi = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div className="container">
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p> {data.id}</p>
        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
