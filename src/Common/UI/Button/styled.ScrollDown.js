import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  padding-top: 60rem;
  // cursor: pointer; 
  
  @-webkit-keyframes sdb10 {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20rem);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb10 {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20rem);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;


export const Circle = styled.span`
  ${({ theme: { colors } }) => {
    return css`
      position: absolute;
      top: 0;
      left: 50%;
      width: 30rem;
      height: 50rem;
      margin-left: -15rem;
      border: 2rem solid ${colors.White};
      border-radius: 50rem;
      box-sizing: border-box;

      &::before {
        position: absolute;
        top: 10rem;
        left: 50%;
        content: "";
        width: 6rem;
        height: 6rem;
        margin-left: -3rem;
        background-color: ${colors.White};
        border-radius: 100%;
        -webkit-animation: sdb10 2s infinite;
        animation: sdb10 2s infinite;
        box-sizing: border-box;
      }
    `;
  }}
`;

export const Text = styled.p`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 100;
      color: ${colors.White};
      letter-spacing: 1.1rem;
    `;
  }}
`;