import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;
