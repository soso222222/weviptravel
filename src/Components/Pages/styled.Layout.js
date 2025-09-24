import styled from "styled-components";
import theme from "../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100rem auto 280rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    grid-template-rows: 80rem auto 300rem;
  }
`;

export const Hidden = styled.span`
    position: absolute;
    left: -9999px;
`;