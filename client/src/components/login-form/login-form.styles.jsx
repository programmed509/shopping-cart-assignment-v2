import styled from "styled-components";
import { MyButton } from "../product-card/product-card.styles";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 0 10px;
  h2 {
    margin: 10px 0;
  }
`;

export const MyWideButton = styled(MyButton)`
  width: 100%;
  font-weight: 600;
`;
