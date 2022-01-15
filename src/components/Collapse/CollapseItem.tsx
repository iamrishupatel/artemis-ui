import React, { ReactChild, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export interface CollapseItemProps {
  /** Title of the collapse item or panel */
  title: string;
  shape?: "rounded" | "basic";
  type?: "margin" | "border" | "basic" | "border-margin";
  children: ReactChild | ReactChild[];
}

export const CollapseItem: React.FC<CollapseItemProps> = ({
  title,
  children,
  shape,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const contentClass = isOpen
    ? "art-collapse-content active"
    : "art-collapse-content";

  const iconClass = isOpen ? "art-collapse-icon active" : "art-collapse-icon";
  const collapseClass = `art-collapse-${type} art-collapse-${shape}`;

  return (
    <div className={collapseClass}>
      <div className="art-collapse-title" onClick={toggleCollapse}>
        <div style={{ flex: 1 }}>{title}</div>
        <AiOutlineCaretDown className={iconClass} />
      </div>
      <div className={contentClass}>{children}</div>
    </div>
  );
};
