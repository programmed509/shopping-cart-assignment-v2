import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../../components/cart/cart.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";

import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  NavLinksEnd,
  NavLinksStart,
  AuthButtons,
  CartButton,
} from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen, setIsCartOpen, cartTotalItems } = useContext(CartContext);
  const { user, logoutUser } = useContext(UserContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    document.body.style.overflow = !isCartOpen ? "hidden" : "auto";
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={"/static/images/logo_2x.png"} alt="app-logo" height={40} />
        </LogoContainer>
        <NavLinksStart>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </NavLinksStart>
        <NavLinksEnd>
          <AuthButtons>
            {user ? (
              <NavLink to={"/"} onClick={() => logoutUser()}>
                Log out
              </NavLink>
            ) : (
              <>
                <NavLink to="/login">Sign In</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </AuthButtons>
          <CartButton onClick={toggleCart}>
            <img
              src={"/static/images/cart.svg"}
              alt={"cart logo"}
              width={30}
              height={30}
            />
            {cartTotalItems()} item(s)
          </CartButton>
        </NavLinksEnd>
      </NavigationContainer>
      {isCartOpen && <Cart />}
      <Outlet />
    </>
  );
};

export default Navigation;
