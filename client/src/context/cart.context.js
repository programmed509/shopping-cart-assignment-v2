import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    fetch("http://localhost:3002/addToCart", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: product.id }),
    }).then(() => {
      if (cart.find((cartItem) => cartItem.id === product.id)) {
        setCart(
          cart.map((cartItem) => {
            if (cartItem.id === product.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
              return cartItem;
            }
          })
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    });
  };

  const removeFromCart = (product) => {
    if (cart.find((cartItem) => cartItem.id === product.id)) {
      if (product.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== product.id));
      } else {
        setCart(
          cart.map((cartItem) => {
            if (cartItem.id === product.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return cartItem;
            }
          })
        );
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartTotal = () => {
    return cart.reduce(
      (total, next) => (total += next.quantity * next.price),
      0
    );
  };

  const cartTotalItems = () =>
    cart.reduce((total, next) => (total += next.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
