import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
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

    &:hover {
      color: blue;
    }
  }
`;

export const LogoContainer = styled(Link)`
  padding: 15px;
  height: 100%;
`;

export const NavLinksStart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLinksEnd = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const AuthButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background: #eeeeee;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
