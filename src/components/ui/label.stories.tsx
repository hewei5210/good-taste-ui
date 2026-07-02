import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./label";
import { Input } from "./input";

const meta: Meta<typeof Label> = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-80 space-y-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Email address",
    htmlFor: "email",
  },
};

export const WithInput: Story = {
  render: () => (
    <>
      <Label htmlFor="email-field">Email address</Label>
      <Input id="email-field" type="email" placeholder="you@example.com" />
    </>
  ),
};

export const Required: Story = {
  args: {
    children: (
      <>
        Username <span className="text-destructive">*</span>
      </>
    ),
  },
};
