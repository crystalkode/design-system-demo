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

export const VRT: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 12 }}>
      <Button variant="fill">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="text">Button</Button>
    </div>
      <div style={{ display: "flex", gap: 12 }}>
      <Button color="secondary" variant="fill">Button</Button>
      <Button color="secondary" variant="outlined">Button</Button>
      <Button color="secondary" variant="text">Button</Button>
    </div>
    </div>
  ),
};