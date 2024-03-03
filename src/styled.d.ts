// import original module decleartion
import "styled-components";
import { Gray } from "./tokens/color";

type ColorMain = "primary" | "secondary" | "tertiary";

type InteractiveColor = {
  hover: string;
  focus: string;
  active: string;
};

type ColorVariant<K = ColorMain, V = Gray> = {
  [key in Exclude<K>]: V;
};

// extending styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    theme: "dark" | "light";
    color: {
      text: {
        body: ColorVariant;
        // button: ColorVariant<ColorMain, InteractiveColor>;
      };
      // background: {
      //   // TODO(maaaahd): add for other things like table, Page
      //   button: {
      //     primary: ColorVariant<InteractiveColor>;
      //     secondary: ColorVariant<InteractiveColor>;
      //     tertiary: ColorVariant<InteractiveColor>;
      //   };
      // };
    };
    // colors: {
    //   ui: {
    //     accent: MainColor;
    //     text: {
    //       body: MainColor;
    //       button: MainColor;
    //     };
    //     interactive: InteractiveColor;
    //     icon: string;
    //     border: string;
    //     background: string;
    //     surface: string;
    //     backdrop: string;
    //   };
    //   // other color options such as data-visulization and so on
    // };
  }
}
