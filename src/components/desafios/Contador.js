import React, { useEffect, useState } from "react";

export const Contador = () => {
  const [clicks, setClick] = useState(0);

  const handleClick = () => {
    setClick(clicks + 1);
  };

  useEffect(() => {
    console.log("clicker montado");

    return () => {
      console.log("clicker desmontado");
    };
  }, [clicks]);

  return (
    <div onClick={handleClick}>
      <h2>Clicks = {clicks}</h2>
    </div>
  );
};
