import styled from "styled-components";
import { mainButtonColor } from "../../App.styles";

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 35%;
  border: 1px solid black;
  top: 80px;
  margin-bottom: -70px;
  right: 10%;
  z-index: 12;
  background-color: #edeeed;
  @media (max-width: 1023px) {
    width: 100%;
    right: 0px;
    border: 0;
  }
  @media (min-width: 1024px) and (max-width: 1080px);
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  top: 0;

  @media (max-width: 1023px) {
    background: white;
    margin-top: 20px;
    span {
      color: black !important;
    }
  }

  span {
    color: white;
  }
`;

export const CartItems = styled.div`
  height: 70%;
  overflow-y: auto;
  background-color: #edeeed;
  @media (max-width: 375px) {
    height: 60%;
  }
`;

export const BoldText = styled.span`
  color: ${({ textColor = "black" }) => textColor};
  font-size: ${({ fontSize = 26 }) => `${fontSize}px`};
  font-weight: ${({ fontWeight = 700 }) => `${fontWeight}`};
`;

export const CloseButton = styled(BoldText)`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const CartCaption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  margin: 0 10px;
  height: 60px;
  border-radius: 3px;
  img,
  span {
    margin-left: 20px;
  }
`;

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  position: absolute;
  bottom: 80px;
  span {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: ${mainButtonColor};
    border-radius: 5px;
    display: flex;
    margin: 5px 5px;
    padding: 0 10px;
    height: 60px;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    border: 0;
    color: white;

    &:hover, &:focus {
      background: #b02652;
    }
  }
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
  ${BoldText} {
    color: black;
  }
`;
