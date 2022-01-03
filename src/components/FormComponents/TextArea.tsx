import React, { FC, HTMLProps } from "react";

export interface TextaAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  height?: string;
  width?: string;
  shape?: "rounded" | "basic";
}

export const TextArea: FC<TextaAreaProps> = ({
  error,
  success,
  disabled,
  label,
  height,
  width,
  shape,
  ...props
}) => {
  let textareaClass = `art-textarea-container art-textarea-${shape}`;
  if (success && !error) {
    textareaClass = `art-textarea-container art-textarea-success art-textarea-${shape}`;
  }
  if (error && !success) {
    textareaClass = `art-textarea-container art-textarea-error art-textarea-${shape}`;
  }
  if (disabled) {
    textareaClass = `art-textarea-container art-textarea-disabled art-textarea-${shape}`;
  }
  return (
    <div className={textareaClass}>
      {label && <label>{label}</label>}
      <textarea className="art-textarea" {...props} style={{ height, width }} />
      {error && !disabled && !success && (
        <span className="art-error-text">{error}</span>
      )}
      {success && !disabled && !error && (
        <span className="art-success-text">{success}</span>
      )}
    </div>
  );
};

TextArea.defaultProps = {
  label: "Description",
  // width: "100vw",
  height: "10rem",
  shape: "basic",
};
