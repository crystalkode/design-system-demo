import React from "react";
import clsx from "clsx";
import "./button.css";
import { Spinner } from "../Spinner/spinner";

type ButtonColor = "primary" | "secondary";
type ButtonVariant = "fill" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  variant = "fill",
  size = "medium",
  className,
  children,
  loading,
  disabled,
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
      disabled={loading || disabled}
      {...props}
    >
      {children}
      {loading && <Spinner/>}
    </button>
  );
};
