import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section.js";

const meta = {
  component: Section,
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Section Title",
    children: "children",
  },
};
