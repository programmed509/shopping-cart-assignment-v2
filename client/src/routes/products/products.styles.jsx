import styled from "styled-components";

export const Container = styled.div``;

export const Sidebar = styled.div`
  height: 100vh;
  top: 80px;
  left: 10%;
  position: fixed;
  background-color: #eaeaea;
  overflow-x: hidden;

  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601px) and (max-width: 1023px) {
    left: 0;
    width: 20%;
    height: 100%;
  }
`;

export const SidebarItem = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0px 5px 0 5px;
  border-bottom: 1px solid #d1d2d2;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
  width: 80%;
  display: grid;
  margin-left: 250px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    grid-template-columns: 100%;
    place-items: center;
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    grid-template-columns: 50% 50%;
    margin-left: 155px;
  }
`;
