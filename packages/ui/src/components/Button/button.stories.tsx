import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};
