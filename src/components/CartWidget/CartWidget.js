import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  return (
    <div className="cartWidget">
      <BsCart4 />
      <span>{totalCantidad()}</span>
    </div>
  );
};
