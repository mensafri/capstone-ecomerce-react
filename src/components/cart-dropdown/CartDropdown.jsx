import React, { useContext } from "react";
import Button from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Keranjang Kosong Bre</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
}
