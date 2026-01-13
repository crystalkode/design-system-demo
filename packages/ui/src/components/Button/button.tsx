import React from "react";
import clsx from "clsx";
import "./button.css";

type ButtonColor = "primary" | "secondary";
type ButtonVariant = "fill" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  variant = "fill",
  size = "medium",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "ds-button",
        `ds-button--${color}`,
        `ds-button--${variant}`,
        `ds-button--${size}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
