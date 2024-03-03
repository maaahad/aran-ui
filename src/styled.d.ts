// import original module decleartion
import "styled-components";
import { Color } from "./tokens";

type ColorMain = "primary" | "secondary" | "tertiary";

type InteractiveColor = {
  hover: string;
  focus: string;
  active: string;
};

type ColorVariant<K = ColorMain, V = Color.ColorToken> = {
  [key in Exclude<K>]: V;
};

// extending styled-components
declare module "styled-components" {
  export interface DefaultTheme {
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
    // size
  }
}
