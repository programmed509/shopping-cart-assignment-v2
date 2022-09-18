import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {
  Backdrop,
  BoldText,
  CartCaption,
  CartContainer,
  CartFooter,
  CartHeader,
  CartItems,
  CloseButton,
  EmptyCartMessage,
} from "./cart.styles";

const Cart = () => {
  const { cart, setIsCartOpen, cartTotal, cartTotalItems } =
    useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <CartContainer>
        <CartHeader>
          <span>
            <BoldText> My Cart </BoldText>{" "}
            {cart.length > 0 && `{${cartTotalItems()} item(s)}`}
          </span>
          <CloseButton onClick={closeCart}>&#10005;</CloseButton>
        </CartHeader>

        {cart.length > 0 ? (
          <>
            <CartItems>
              {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}
              <CartCaption>
                <img
                  src={"/static/images/lowest-price.png"}
                  alt={"lowest price banner"}
                  width={110}
                  height={40}
                />
                <span> You won't find it cheaper anywhere </span>
              </CartCaption>
            </CartItems>
            <CartFooter>
              <span>Promo code can be applied on payment page</span>
              <button>
                <span>Proceed to Checkout</span>
                <span>Rs.{cartTotal()} &gt;</span>
              </button>
            </CartFooter>
          </>
        ) : (
          <EmptyCartMessage>
            <BoldText fontSize={26}>No items in your cart</BoldText>
            <span> Your favourite items are just a click away</span>
          </EmptyCartMessage>
        )}
      </CartContainer>
      <Backdrop />
    </>
  );
};

export default Cart;
