//styled-components
import "styled-components";

//Global
import theme from "../global/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
