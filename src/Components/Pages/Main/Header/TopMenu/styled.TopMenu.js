import styled, { css } from "styled-components";
import theme from "../../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Nav = styled.nav`
  .ItemBox {
    display: flex;
  }
  .ItemBoxContainerM {
    display: none;
  }
  @media screen and (max-width: ${mediaScreenWidth}) {
    .ItemBox {
      display: none;
    }
    .ItemBoxContainerM {
      display: flex;
    }
  }
`;


export const ItemBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "KoPub Batang Bold";
  font-size: 16rem;
`;


export const Item = styled.li`
  padding: 0 30rem;
  // font-family: inherit;
  a {
    padding: 5rem 10rem;
  }
`;


export const ItemBoxContainerM = styled.div`
  
`;


export const ItemBoxM = styled.ul`
  ${({ theme: { colors }, isActive }) => {
    return ` 
        position: fixed;
        top: 0;
        right: ${isActive ? "0" : "-78%"};
        width: calc(78% - 66rem);
        height: 100vh;
        display: flex;
        // align-items: center;
        // justify-content: center;
        flex-direction: column;
        padding: 24rem 24rem 24rem 42rem;
        background-color: ${colors.White};
        z-index: 400;
        transition: all 0.7s ease-out;
        `;
  }}
`;

export const ItemM = styled.li`
  display: flex;
  align-items: center;
  height: 90rem;
  font-size: 26rem;
  
  &:first-child {
    height: 64rem;
    justify-content: end;
  }
`;