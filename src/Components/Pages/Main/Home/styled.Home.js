import styled, { css } from "styled-components";
import theme from "../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
`;


export const SectionDestinationContainer = styled.section`
  position: relative;
  padding: 100rem 11%;
`;


export const SectionDestinationTitle = styled.h3`
  padding-bottom: 20rem;
`;


export const SectionMainImageContainer = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      position: relative;
      padding: 0 40rem;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 40rem;
        width: calc(100% - 80rem);
        height: 100%;
        background-color: ${colors.CoverGreenOpacity05};
      }

      @media screen and (max-width: ${mediaScreenWidth}) {
        padding: 0;

        &::before {
          left: 0;
          width: 100%;
        }
      }
    `;
  }}
`;