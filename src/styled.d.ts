// import original module decleartion
import "styled-components";

// color type should come from colors tokens

type VariadicColors = {
  primary: string;
  secondary: string;
  error: string;
};

type InteractiveColors = {
  hover: string;
  focus: string;
  active: string;
};

// extending styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      ui: {
        accent: VariadicColors;
        text: {
          body: VariadicColors;
          button: VariadicColors;
        };
        interactive: InteractiveColors;
        icon: string;
        border: string;
        background: string;
        surface: string;
        backdrop: string;
      };
    };
  }
}
