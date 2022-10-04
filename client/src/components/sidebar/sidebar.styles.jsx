import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 12%;
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

export const SidebarItem = styled.button`
  padding: 10px;
  width: 100%;
  margin: 0px 5px 0 5px;
  border: 0;
  border-bottom: 1px solid #d1d2d2;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  cursor: pointer;
`;
