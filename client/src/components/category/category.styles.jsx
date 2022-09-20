import styled from "styled-components";
import { BoldText } from "../cart/cart.styles";
import { mainColor } from "../../App.styles";

export const CategoryContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  background: white;
  margin: 10px 0;
  width: 100%;

  span {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    height: 150px;
    ${BoldText} {
      font-size: 20px !important;
      font-weight: 700 !important;
    }
    span {
      font-size: 15px !important;
    }
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    height: 200px;
    ${BoldText} {
      font-size: 20px !important;
      font-weight: 700 !important;
    }
    span {
      font-size: 15px !important;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }

  @media (max-width: 1023px) {
    width: 40%;
    height: auto;
  }
  img {
    width: 100%;
    height: 75%;
  }
  span:nth-of-type(2) {
    margin: 10px 0;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  text-align: center;
  @media (max-width: 600px) {
    width: 70%;
    height: auto;
  }

  span:nth-of-type(2) {
    margin: 10px 0;
  }
`;

export const NavigateButton = styled.button`
  margin: 5px 0;
  border-radius: 0px;
  background: ${mainColor};
  border: 0;
  padding: 10px;
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    color: white;
    background: #b02652;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
