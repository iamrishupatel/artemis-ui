import React, { ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "primary-light"
    | "danger"
    | "danger-light"
    | "success"
    | "success-light";
  shape?: "rounded" | "circle";
  size?: "lg" | "md" | "sm";
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
