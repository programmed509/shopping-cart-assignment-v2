import styled from "styled-components";
import { mainButtonColor } from "../../App.styles";

export const CategoryDropdownContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${mainButtonColor};

  @media (min-width: 601px) {
    display: none;
  }
`;

export const DropdownItems = styled.div`
  position: absolute;
  background: ${mainButtonColor};
  color: white;
  width: 100%;
  padding: 0 0 10px 10px;
`;

export const DownArrow = styled.span`
  transform: rotate(90deg);
  font-size: 25px;
  font-weight: 600;
`;

export const DropdownItem = styled.div`
  padding: 10px;
`;

export const SelectedCategory = styled.div`
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
