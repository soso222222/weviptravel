import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /** defaultTheme */
  :root{
    --Black:${(props) => props.theme.colors.Black};
    --White:${(props) => props.theme.colors.White};
    
    --TextOpacity10:${(props) => props.theme.colors.TextOpacity10};
    --TextOpacity08:${(props) => props.theme.colors.TextOpacity08};
    --TextOpacity07:${(props) => props.theme.colors.TextOpacity07};
    --TextOpacity05:${(props) => props.theme.colors.TextOpacity05};
    --TextOpacity03:${(props) => props.theme.colors.TextOpacity03};

    --BorderOpacity10:${(props) => props.theme.colors.BorderOpacity10};
    --BorderOpacity07:${(props) => props.theme.colors.BorderOpacity07};
    --BorderOpacity05:${(props) => props.theme.colors.BorderOpacity05};

    --BackgroundGrayOpacity10:${(props) =>
      props.theme.colors.BackgroundGrayOpacity10};

    --CoverGreenOpacity05:${(props) => props.theme.colors.CoverGreenOpacity05};

    --Gray700Opacity10:${(props) => props.theme.colors.Gray700Opacity10};
    --Gray300Opacity10:${(props) => props.theme.colors.Gray300Opacity10};
    
    --Green700Opacity10:${(props) => props.theme.colors.Green700Opacity10};
    --Green700Opacity08:${(props) => props.theme.colors.Green700Opacity08};
    --Green700Opacity03:${(props) => props.theme.colors.Green700Opacity03};

    --Elevation_001:${(props) => props.theme.elevation.Elevation__001};
    --Elevation_002:${(props) => props.theme.elevation.Elevation__002};
    --Elevation_003:${(props) => props.theme.elevation.Elevation__003};
    --Elevation_004:${(props) => props.theme.elevation.Elevation__004};
    --Elevation_005:${(props) => props.theme.elevation.Elevation__005};
    --Elevation_006:${(props) => props.theme.elevation.Elevation__006};
    --Elevation_007:${(props) => props.theme.elevation.Elevation__007};
    --Elevation_008:${(props) => props.theme.elevation.Elevation__008};
  }
`;

export default GlobalStyle;
