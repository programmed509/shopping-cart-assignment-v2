import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartItemContainer,
  CartItemDetail,
  CartItemImage,
  CartItemQuantityCounter,
  ItemTotal,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CartItemImage src={cartItem.imageURL} alt={cartItem.name} />

      <CartItemDetail>
        <span>
          <b>{cartItem.name}</b>
        </span>
        <CartItemQuantityCounter>
          <button onClick={() => removeFromCart(cartItem)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => addToCart(cartItem)}>+</button>
          <span> X </span>
          <span> Rs.{cartItem.price}</span>
        </CartItemQuantityCounter>
      </CartItemDetail>
      <ItemTotal>
        <br />
        Rs.{cartItem.quantity * cartItem.price}
      </ItemTotal>
    </CartItemContainer>
  );
};

export default CartItem;
