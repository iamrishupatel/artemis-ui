import React, {  ReactChild, ReactElement, ReactNode, useState } from "react";

export interface DropDownProps {
  label: ReactNode;
  children: ReactElement<DropDownItemProps> | ReactElement<DropDownItemProps>[];
  shape?: "rounded" | "default";
  trigger?: "click" | "hover";
}

export interface SubDropDownProps {
  label: ReactNode;
  children: ReactElement<DropDownItemProps> | ReactElement<DropDownItemProps>[];
  trigger?: "click" | "hover";
}

export interface DropDownItemProps {
  children: ReactChild | ReactChild[];
}

export const DropDownItem: React.FC = ({ children, ...props }) => {
  return (
    <div className="art-dropdown-item" {...props}>
      {children}
    </div>
  );
};

export const DropDown: React.FC<DropDownProps> = ({
  label,
  children,
  shape,
  trigger,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropDownContainerClass =
    shape === "rounded"
      ? `art-dropdown-container ${shape}`
      : "art-dropdown-container";
  const dropdownClass = isActive ? "art-dropdown active" : "art-dropdown";

  let dropDownLabelEventHandlers = {};
  if (trigger === "click") {
    dropDownLabelEventHandlers = {
      onClick: () => setIsActive(!isActive),
    };
  } else {
    dropDownLabelEventHandlers = {
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false),
    };
  }
  return (
    <div
      className={dropDownContainerClass}
      {...props}
      {...dropDownLabelEventHandlers}
    >
      <p className="art-dropdown-label">{label}</p>
      <div className={dropdownClass}>{children}</div>
    </div>
  );
};

export const SubDropDown: React.FC<SubDropDownProps> = ({
  label,
  children,
  trigger,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownClass = isActive
    ? "art-sub-dropdown active"
    : "art-sub-dropdown";

  let dropDownLabelEventHandlers = {};
  if (trigger === "click") {
    dropDownLabelEventHandlers = {
      onClick: () => setIsActive(!isActive),
    };
  } else {
    dropDownLabelEventHandlers = {
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false),
    };
  }
  return (
    <div
      className="art-sub-dropdown-container"
      {...props}
      {...dropDownLabelEventHandlers}
    >
      <p className="art-dropdown-label">{label}</p>
      <div className={dropdownClass}>{children}</div>
    </div>
  );
};

DropDown.defaultProps = {
  trigger: "click",
  shape: "default",
  label: "click me",
};

SubDropDown.defaultProps = {
  trigger: "hover",
  label: "click me",
};
