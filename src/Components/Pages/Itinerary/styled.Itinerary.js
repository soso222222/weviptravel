import styled, { css } from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
  display: grid;
  flex-direction: column;
  gap: 6%;
  padding: 100rem 11%;
  font-weight: 300;

  @media screen and (max-width: ${mediaScreenWidth}) {
    // padding: 80rem 4%;
  }
`;

export const ProcessItemText = styled.p`
  ${({ theme: { colors } }) => {
    return css`
      font-size: 16rem;
      color: ${colors.Gray300Opacity10};
      margin-top: 12rem;

      @media screen and (max-width: ${mediaScreenWidth}) {
        font-size: 14rem;
        margin-top: 6rem;
      }
    `;
  }}
`;

export const HeadInfoWrapper = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      border-top: 1px solid ${colors.Gray300Opacity10};
      padding-top: 30rem;
    `;
  }}
`;


export const HeadInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20rem;
`;

export const HeadInfoItem = styled.div`
  display: flex;

  svg {
    padding-right: 14%;
  }
`;

export const HeadInfoItemText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ItineraryDayContainer = styled.div`
`;


export const ItineraryDayTop = styled.a`
  display: grid;
  grid-template-columns: 1fr 30rem;
  gap: 20rem;
  align-items: center;
  justify-content: center;
  padding: 0 4rem 24rem 4rem;
  cursor: pointer;
`;

export const ItineraryDayBottom = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
`;


export const ItineraryDayContent = styled.div`
  display: grid;
  grid-template-columns: 70rem 1fr;
  gap: 30rem 20rem;
  align-items: center;
  justify-content: center;
`;


export const ItineraryMapDot = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItineraryDetailImageContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(3, minmax(20%, auto));
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: 1fr;
  justify-content: center;
  grid-column: 2 / 3;
  width: 900rem;
  // gap: 20rem;
`;
