import React, { useContext } from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  // const { addItemToCart } = useContext(CartContext);

  // const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
}
