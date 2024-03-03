import { DefaultTheme } from "styled-components";

// This will list all possible color palettes
export enum Gray {
  P10 = "#fbfafd",
  P50 = "#ececef",
  P100 = "#dcdcde",
  P200 = "#bfbfc3",
  P300 = "#a4a3a8",
  P400 = "#89888d",
  P500 = "#737278",
  P600 = "#626168",
  P700 = "#535158",
  P800 = "#434248",
  P900 = "#333238",
  P950 = "#1f1e24",
}

const Palette = {
  GRAY: Gray,
};

export const getColorToken = (
  theme: DefaultTheme["theme"],
): DefaultTheme["color"] => {
  const palette: keyof typeof Palette = ["dark", "light"].includes(theme)
    ? "GRAY"
    : "";

  return {
    text: {
      body: {
        primary: Palette[palette].P50,
        secondary: Palette[palette].P100,
        tertiary: Palette[palette].P900,
      },
    },
  };
};
