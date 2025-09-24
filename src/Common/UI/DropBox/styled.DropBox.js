import styled, { css } from "styled-components";
import theme from "../../../Style/theme";


export const Wrapper = styled.select`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;

      // style 초기화
      border: none;
      outline: none;
      background-color: inherit;
      cursor: pointer;
    `;
  }}
`;

export const DropBoxTitle = styled.div`

`;

export const DropItemContainer = styled.option`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;
      flex-direction: column;
    `;
  }}
`;