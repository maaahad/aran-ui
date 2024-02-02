import Example from "./Example";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Example> = {
  title: "Page",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Fixed: Story = {
  args: {
    variant: "fluid",
  },
};
