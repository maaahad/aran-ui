import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { AranThemeProvider } from "../../../themes";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
  decorators: [
    (Story) => (
      <AranThemeProvider theme="green">
        <Story />
      </AranThemeProvider>
    ),
  ],
};

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    category: "primary",
    label: "Primary Button",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    category: "secondary",
    label: "Secondary Button",
    onClick: () => console.log("Button"),
  },
};

export const Tertiary: Story = {
  args: {
    category: "tertiary",
    label: "Tertiary Button",
    onClick: () => console.log("Button"),
  },
};

export const Small: Story = {
  args: {
    label: "Primary Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Primary medium",
  },
};

export const Large: Story = {
  args: {
    label: "Primary Large",
    size: "large",
  },
};

export const Block: Story = {
  args: {
    label: "Primary medium button with fullwidth",
    block: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "loading...",
  },
};

export default meta;
