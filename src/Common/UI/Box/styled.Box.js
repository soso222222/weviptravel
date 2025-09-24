import styled, { css } from "styled-components";
import theme from "../../../Style/theme";


export const Wrapper = styled.div`
  ${({ theme: { colors }, gap, margin, padding }) => {
    return css`
      display: grid;
      flex-direction: column;
      border: 1rem solid ${colors.BorderOpacity07};
      border-radius: 12rem;
      margin: ${margin};
      padding: ${padding};
      gap: ${gap}rem;
    `;
  }}
`;