import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonProps } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button/VRT",
  component: Button,
  tags: ["!autodocs"],
  args: {
    color: "primary",
    variant: "fill",
    children: "Button",
  },
  parameters: {
    chromatic: { disableSnapshot: false },
    pseudo: {
      hover: [".vrt-hovered"],
      active: [".vrt-active"],
      focusVisible: [".vrt-focused"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const states = [
  { label: "Enabled", props: {} },
  { label: "Hovered", props: { className: "vrt-hovered" } },
  { label: "Active", props: { className: "vrt-active" } },
  { label: "Focused", props: { className: "vrt-focused" } },
  { label: "Disabled", props: { disabled: true } },
];

const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];

type ButtonCombination = {
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
};

const buttonCombinations: ButtonCombination[] = [
  { color: "primary", variant: "fill" },
  { color: "primary", variant: "outlined" },
  { color: "primary", variant: "text" },
  { color: "secondary", variant: "fill" },
  { color: "secondary", variant: "outlined" },
  { color: "secondary", variant: "text" },
];

export const VRT: Story = {
  render: () => (
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {buttonCombinations.map(({ color, variant }) => (
        <div key={`${color}-${variant}`} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <span key={`${color}-${variant}`} style={{fontSize: 18}}>
              {color}-{variant}
            </span>
          </div>
          {sizes.map((size) => (
            <div key={`${size}`} >
              <span style={{fontSize: 16}}>{size}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {states.map(({label, props})=>(
                  <Button 
                    key={label}
                    color={color}
                    variant={variant}
                    size={size}
                    {...props}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
