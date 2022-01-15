import React, { FC, ReactChild } from "react";

export interface BadgeProps {
  children: ReactChild;
  /** Icon component of the badge */
  icon?: ReactChild;
  /** Size of the badge */
  size?: "sm" | "md" | "lg";
  /** Variant of the badge for visual styling */
  variant:
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "dark"
    | "primary-light"
    | "danger-light"
    | "warning-light"
    | "success-light"
    | "dark-light";
}

export const Badge: FC<BadgeProps> = ({
  variant,
  icon,
  children,
  size,
  ...props
}) => {
  const badgeClass = `art-badge art-badge-${variant} art-badge-${size}`;

  return (
    <div className={badgeClass} {...props}>
      {icon && icon}
      <div className="art-badge-content">{children}</div>
    </div>
  );
};

Badge.defaultProps = {
  variant: "primary",
  size : "md"
};
