import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme: { icon, button, colors }, themeName, bg, size, width, iconType }) => {
    const themeProps = iconType ? icon.theme[themeName] : button.theme[themeName];
    const themePropHover = iconType ? icon.theme[themeName].hover : button.theme[themeName].hover;
    const themeBtn = button.size[size];
    const borderColor = iconType ? "transparent" : colors.Border10;
    const borderRadius = iconType ? "0" : "100rem";
    const minWidth = iconType ? width : "50rem";

    return css`
      display: inline-block;
      position: relative;
      min-width: ${themeName === "text" ? "0" : minWidth};
      ${width && `width: ${width}rem;`}
      border: 1px solid ${borderColor};
      background: transparent;
      ${themeBtn}
      ${themeProps}
      ${bg && `background-color: ${bg}`};
      border-radius: ${borderRadius};
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      font-weight: 400;
      overflow: hidden;
      transition: all 0.3s;
      appearance: none;
      -webkit-appearance: none;

      &:hover {
        ${themePropHover}
      }
    `;
  }}
`;
