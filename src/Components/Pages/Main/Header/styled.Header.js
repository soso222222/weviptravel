import styled, { css } from "styled-components";
import theme from "../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.header`
  ${({ theme: { elevation, colors } }) => {
    return css`
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // padding: 0 210rem;
      padding: 0 11%;
    `;
  }}
`;

export const LangBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10rem;
  }
`;

export const Logo = styled.img`
  max-width: 91rem;
  padding: 9rem 0;
  @media screen and (max-width: ${mediaScreenWidth}) {
    max-width: 73rem;
    padding: 7rem 0;
  }
`;

export const Hidden = styled.span`
  position: absolute;
  left: -9999px;
`;