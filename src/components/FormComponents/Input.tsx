import React, { ReactNode, useState } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  /** Label of the input */
  label?: string;
  /** Error description of the input */
  error?: string;
  /** Success description of the input */
  success?: string;
  /** The type of input */
  type: "number" | "password" | "text" | "email";
  /** The shape of input */
  shape?: "rounded" | "basic";
  /** Left icon component of the badge */
  leftIcon?: ReactNode;
  /** Right icon component of the badge */
  rightIcon?: ReactNode;
  /** Disabled state of the input */
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  shape,
  error,
  success,
  disabled,
  leftIcon,
  rightIcon,

  ...props
}) => {
  let className = "art-input-wrapper";
  if (error && !success) {
    className = "art-input-wrapper art-input-error";
  }
  if (success && !error) {
    className = "art-input-wrapper art-input-success";
  }
  if (disabled) {
    className = "art-input-wrapper art-input-disabled";
  }
  let inputClass = `art-input art-input-${shape}`;
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <div className={inputClass}>
        {leftIcon && leftIcon}
        <input {...props} type={type} />
        {rightIcon && rightIcon}
      </div>
      {error && !disabled && !success && (
        <span className="art-error-text">{error}</span>
      )}
      {success && !disabled && !error && (
        <span className="art-success-text">{success}</span>
      )}
    </div>
  );
};
