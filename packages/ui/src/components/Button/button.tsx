import React from "react";
import clsx from "clsx";
import "./button.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "ds-button",
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
