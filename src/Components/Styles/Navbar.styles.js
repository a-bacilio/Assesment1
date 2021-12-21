import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: var(--navbarHeight);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBar = styled.div`
  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: auto 10px;
  }
  display: none;
`;

export const Hamburguer = styled.img`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  display: flex;
  width: 50px;
  height: 50px;
  margin: auto 10px;
`;

export const ModalMenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`;
