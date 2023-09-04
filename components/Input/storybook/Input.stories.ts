import { Input } from "../";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Example/Input",
  component: Input.Text,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input.Text>;

export const TextInput: Story = {};

export const DateInput: Story = {
  args: {
    type: "date",
  },
};
