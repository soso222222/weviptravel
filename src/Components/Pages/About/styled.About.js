import styled, { css } from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
  padding: 100rem 11%;
  font-weight: 300;

  @media screen and (max-width: ${mediaScreenWidth}) {
    // padding: 80rem 4%;
    padding: 80rem 0;
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