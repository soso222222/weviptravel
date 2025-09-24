import styled from "styled-components";

export const Svg = styled.svg`
  ${({ size, fill, theme: { icon, colors } }) => {
    return ` 
        width: ${icon.size[size].width};
        height: ${icon.size[size].width};
        fill: ${fill ? fill : colors.TextOpacity10};
        text-indent: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
  }}
`;