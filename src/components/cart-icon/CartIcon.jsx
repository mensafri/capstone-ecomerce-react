import "./cart-icon.styles.scss";
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
