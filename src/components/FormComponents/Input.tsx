import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons/lib";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  type: "number" | "password" | "text" | "email";
  shape?: "rounded" | "basic";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
