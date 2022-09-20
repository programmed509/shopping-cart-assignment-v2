import styled from "styled-components";
import { mainColor } from "../../App.styles";

export const MyButton = styled.button`
  border-radius: 0px;
  border: 0px;
  background: ${mainColor};
  padding: 10px;
  color: white;

  &:hover,
  &:focus {
    background: #b02652;
  }
`;

export const MyCard = styled.div`
  width: ${({ width }) => width};
  border-bottom: 1px dotted #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  height: auto;
  margin-bottom: 20px;
`;

export const MyCardBody = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "header header"
    "image description"
    "image footer";

  @media (min-width: 601px) and (max-width: 1023px) {
    grid-template-areas:
      "header header"
      "image description"
      "footer footer";
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "header header"
      "image image"
      "description description"
      "footer footer";
  }
`;

export const MyCardTitle = styled.div`
  height: 100px;
  font-size: 20px;
  grid-area: header;
  @media (min-width: 601px) and (max-width: 1023px) {
    height: 150px;
  }
`;

export const MyCardDescription = styled.p`
  height: 100px;
  background: #eaeaea;
  overflow: hidden;
  padding: 5px;
  grid-area: description;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const MyCardImage = styled.img`
  grid-area: image;
  max-width: 80%;
`;

export const MyCardText = styled.span`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const MyCardFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MyButton} {
    width: 100%;

    @media (min-width: 1023px) {
      width: auto;
      span {
        display: none;
      }
    }
  }
`;
