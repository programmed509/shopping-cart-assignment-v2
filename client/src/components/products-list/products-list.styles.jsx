import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 80%;
  display: grid;
  margin-left: auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 100%;
    place-items: center;
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    grid-template-columns: 50% 50%;
  }
`;
