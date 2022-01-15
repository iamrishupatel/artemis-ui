import React, { ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** Variant of the button for visual styling */
  variant?:
    | "primary"
    | "primary-light"
    | "danger"
    | "danger-light"
    | "success"
    | "success-light";
  /** Shape of the button */
  shape?: "rounded" | "circle";
  /** Size of the button */
  size?: "lg" | "md" | "sm";
  /** Disabled state of button */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  shape,
  size,
  ...props
}) => {
  const className = `art-btn art-btn-${variant} art-btn-${shape} art-btn-${size}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
