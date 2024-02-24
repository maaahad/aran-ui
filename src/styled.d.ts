// import original module decleartion
import "styled-components";

// color type should come from colors tokens

type MainColor = {
  primary: string;
  secondary: string;
  error: string;
};

type InteractiveColor = {
  hover: string;
  focus: string;
  active: string;
};

// extending styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      ui: {
        accent: MainColor;
        text: {
          body: MainColor;
          button: MainColor;
        };
        interactive: InteractiveColor;
        icon: string;
        border: string;
        background: string;
        surface: string;
        backdrop: string;
      };
      // other color options such as data-visulization and so on
    };
  }
}
