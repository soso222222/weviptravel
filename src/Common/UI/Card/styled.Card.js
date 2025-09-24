import styled, { css } from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const CardBox = styled.div`
  ${({ columns, gap }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: ${gap}rem;

      @media screen and (max-width: ${mediaScreenWidth}) {
        grid-template-columns: repeat(1, 1fr);
        gap: ${gap}rem;
      }
    `;
  }}
`;


export const CardItem = styled.button`
  ${({ theme: { colors } }) => {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      color: ${colors.White};
      overflow: hidden;

      // button style 초기화
      border: none;
      outline: none;
      background-color: inherit;
      cursor: pointer;

      &:hover .imgContainer::after {
        opacity: 0.6;
      }
      &:hover .textContainer {
        height: 76rem;
      }

      @media screen and (max-width: ${mediaScreenWidth}) {
        flex-direction: column;
      }
    `;
  }}
`;


export const CardImgContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  border-radius: 5%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      #00000008 0%,
      #000000 100%
    ) !important;
    opacity: 0.2;
  }
`;

export const CardImage = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: ${mediaScreenWidth}) {
  }
`;



export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  font-weight: 500;
  padding: 10%;
  color: inherit;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 26rem;
  letter-spacing: 2.5rem;
  color: inherit;
`;

export const CardText = styled.p`
  font-weight: 100;
  font-size: 16rem;
  color: inherit;
  height: 0;
  overflow: hidden;
  padding-top: 5%;
  transition: 0.3s;
`;

