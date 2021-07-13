import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      secondary: string;
      secondary_light: string;

      success: string;
      success_light: string;

      attention: string;
      attention_light: string;

      shape: string;

      title: string;
      text: string;

      background: string;
    };
  }
}
