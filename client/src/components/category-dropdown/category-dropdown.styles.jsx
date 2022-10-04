import styled from "styled-components";
import { mainColor } from "../../App.styles";

export const CategoryDropdownContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${mainColor};

  @media (min-width: 601px) {
    display: none;
  }
`;

export const DropdownItems = styled.ul`
  position: absolute;
  background: ${mainColor};
  color: white;
  width: 100%;
  padding: 0 10px 10px 10px;
  list-style: none;
`;

export const DownArrow = styled.span`
  transform: rotate(90deg);
  font-size: 25px;
  font-weight: 600;
`;

export const DropdownItem = styled.button`
  padding: 10px;
  width: 100%;
  background: none;
  border: 0;
  color: white;
  text-align: left;
`;

export const SelectedCategory = styled.button`
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  background: ${mainColor};
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
