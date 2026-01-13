import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    color: "primary",
    variant:"fill",
    children: "Button",
  },
    parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button color="primary">Small</Button>
      <Button color="secondary">Small</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="fill">Small</Button>
      <Button variant="outlined">Small</Button>
      <Button variant="text">Small</Button>

    </div>
  ),
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
