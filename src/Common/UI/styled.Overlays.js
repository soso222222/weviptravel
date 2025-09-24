import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { colors }, isActive }) => {
    return css`
      display: ${isActive ? "flex" : "none"};
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      justify-content: center;
      align-items: center;
      z-index: 100;
      transition: opacity 0.2s ease-in;
      opacity: 0;
      background-color: ${colors.TextOpacity08};

      &.active {
        opacity: 1;
      }
    `;
  }}
`;