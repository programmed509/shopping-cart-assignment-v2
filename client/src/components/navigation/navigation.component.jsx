import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Cart from "../cart/cart.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";

import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  NavLinksEnd,
  NavLinksStart,
  AuthLinks,
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
      <NavigationContainer aria-label="Main Navigation">
        <LogoContainer to="/" tabIndex={"0"}>
          <img
            aria-label="Product Logo"
            src={"/static/images/logo_2x.png"}
            alt="app-logo"
            height={40}
          />
        </LogoContainer>
        <NavLinksStart>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/products">Products</Link>
          </NavLink>
        </NavLinksStart>
        <NavLinksEnd>
          <AuthLinks>
            {user ? (
              <NavLink>
                <Link to={"/"} onClick={() => logoutUser()}>
                  Log out
                </Link>
              </NavLink>
            ) : (
              <>
                <NavLink>
                  <Link to="/login">Sign In</Link>
                </NavLink>
                <NavLink>
                  <Link to="/register">Register</Link>
                </NavLink>
              </>
            )}
          </AuthLinks>
          <CartButton
            role="button"
            tabIndex={"0"}
            aria-label={"Click to open cart"}
            onClick={toggleCart}
          >
            <img
              src={"/static/images/cart.svg"}
              alt={"Cart logo"}
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
