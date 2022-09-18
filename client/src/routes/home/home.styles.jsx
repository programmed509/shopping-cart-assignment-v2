import styled from "styled-components";

export const SectionWithShadow = styled.div`
  background: white;
  margin: 30px;
  padding: 20px;
  position: relative;

  @media (max-width: 1023px) {
    margin: 10px;
    padding: 10px;
  }

  &::after {
    border-radius: 0 0 230px 230px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
    content: "";
    display: flex;
    justify-content: center;
    align-item: center;
    bottom: 0px;
    height: 250px;
    position: absolute;
    width: 90%;
    z-index: -1;
    @media (max-width: 1023px) {
      height: 100px;
    }
  }
`;
