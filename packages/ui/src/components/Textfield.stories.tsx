import type { Meta, StoryObj } from "@storybook/react";
import { Textfield } from "./Textfield.js";

const meta = {
  component: Textfield,
  tags: ["autodocs"],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "first_name",
    label: "First Name",
    placeholder: "Textfield",
  },
};
