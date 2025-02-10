import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.js";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const DisabledPrimary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
    disabled: true,
  },
};
