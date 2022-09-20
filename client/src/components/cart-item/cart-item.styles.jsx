import styled from "styled-components";
import { mainColor } from "../../App.styles";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 0 20px;
  @media (max-width: 600px) {
    width: 75px;
    height: auto;
    margin: 0 10px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 80px;
    height: auto;
    margin: 0 10px;
  }
`;

export const CartItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const CartItemQuantityCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${mainColor};
    margin: 0 10px;
    color: white;
    border: 1px solid ${mainColor};
    @media (max-width: 600px) {
      margin: 0;
    }
  }
  span {
    margin: 0 10px;
    width: 5px;
    @media (max-width: 600px) {
      margin: 0 10px;
    }
  }

  @media (max-width: 600px) {
  }
`;

export const ItemTotal = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;
  height: 100%;
`;
