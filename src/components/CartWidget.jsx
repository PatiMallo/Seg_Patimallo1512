import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Usar íconos de react-icons

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={30} />
    </div>
  );
}
export default CartWidget;
