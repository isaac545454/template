import { Input } from "../";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Example/InputMask",
  component: Input.Mask,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input.Mask>;

export const Mask: Story = {
  args: {
    mask: "998.989.999.69",
  },
};
