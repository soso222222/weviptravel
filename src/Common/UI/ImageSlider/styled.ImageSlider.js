import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  ${({ theme: { colors }, width, height, aglign }) => {
    return css`
      display: block;
      // margin: 0 auto;
      ${aglign}
      width: ${width};
      height: ${height};
      min-height: 0rem;
      min-width: 0rem;
      max-width: 80vw;
      max-height: 80vw;

      .slick-prev:before,
      .slick-next:before {
        color: ${colors.TextOpacity10};
      }
    `;
  }}
`;

export const Slide = styled.img`
  ${({ width, height }) => {
    return css`
      border-radius: 20rem;
      width: calc(100% - 6rem);
      height: ${height};
    `;
  }}
`;
