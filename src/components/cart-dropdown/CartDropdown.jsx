import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cart-item/CartItem";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
}
