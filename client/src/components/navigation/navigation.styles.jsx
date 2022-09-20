import styled from "styled-components";
import { Link } from "react-router-dom";
import { highlightColor } from "../../App.styles";

export const NavigationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  padding: 0 10%;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 11;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);

  @media (max-width: 600px) {
    padding: 0;
    height: 70px;
  }
  @media (min-width: 601px) and (max-width: 1023px) {
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      color: blue;
    }
  }
`;

export const LogoContainer = styled(Link)`
  padding: 15px;
  height: 100%;
`;

export const NavLinksStart = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLinksEnd = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  list-style: none;
`;

export const AuthLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  list-style: none;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: 0;
  background: ${highlightColor};
  cursor: pointer;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const NavLink = styled.li`
  padding: 10px 15px;
  cursor: pointer;
`;
