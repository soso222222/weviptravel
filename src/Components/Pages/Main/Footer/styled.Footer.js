import styled, { css } from "styled-components";
import theme from "../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.footer`
  ${({ theme: { colors } }) => {
    return css`
      grid-row: 3 / 4;
      width: 100%;
      border-top: 1px solid ${colors.TextOpacity10};
    `;
  }}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40rem 210rem;
  font-family: "Pretendard Regular", "sans-serif";

  @media screen and (max-width: ${mediaScreenWidth}) {
    padding: 40rem 4%;
  }
`;

export const Copyright = styled.p`
  ${({ theme: { colors } }) => {
    return css`
      font-family: inherit;
      font-weight: 500;
      color: ${colors.Gray300Opacity10};

      @media screen and (max-width: ${mediaScreenWidth}) {
        font-size: 12rem;
      }
    `;
  }}
`;