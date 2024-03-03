import { DefaultTheme } from "styled-components";
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

export type ColorToken = Gray;
export type Theme = "default" | "purple";
// Add other enum for other color options
export const PALETTE = {
  GRAY: Gray,
  // add other color palette
};

export const getColorToken = (theme: Theme): DefaultTheme["color"] => {
  // Should be based on theme param
  const palette = "GRAY" as keyof typeof PALETTE;
  return {
    text: {
      body: {
        primary: PALETTE[palette].P900,
        secondary: PALETTE[palette].P200,
        tertiary: PALETTE[palette].P600,
      },
    },
  };
};
