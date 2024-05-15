// import original module decleartion
import "styled-components";
import { Color } from "./tokens";
import { ColorToken } from "./tokens/color";

type ColorMain = "primary" | "secondary" | "tertiary";

type InteractiveColor = {
  hover: string;
  focus: string;
  active: string;
};

type ColorVariant<K = ColorMain, V = Color.ColorToken> = {
  [key in Exclude<K>]: V;
};

type UiColor = {
  background: Color.ColorToken;
  border: Color.ColorToken;
};

type InteractiveColor = {
  [key in "default" | "hover" | "focus" | "active"]: Color.ColorToken;
};

// extending styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      text: {
        body: ColorVariant;
        button: {
          primary: {
            default: {
              default: color.colortoken;
              hover: color.colortoken;
              focus: color.colortoken;
              active: color.colortoken;
            };
            confirm: {
              default: Color.ColorToken;
              hover: Color.ColorToken;
              focus: Color.ColorToken;
              active: Color.ColorToken;
            };
            danger: {
              default: Color.ColorToken;
              hover: Color.ColorToken;
              focus: Color.ColorToken;
              active: Color.ColorToken;
            };
          };
        };
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
