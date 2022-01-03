import React, { Children, cloneElement, ReactChild, ReactElement } from "react";

export interface CollapseProps {
  type?: "margin" | "border" | "basic" | "border-margin";
  shape?: "rounded" | "basic";
  children: ReactChild | ReactChild[] | ReactElement[];
}

export const Collapse: React.FC<CollapseProps> = ({
  type,
  children,
  shape,
  ...props
}) => {
  const containerClass = `art-collapse-container`;

  const childrenArray = Children.toArray(children).map(child =>
    cloneElement(child as ReactElement, { shape, type })
  );
  return (
    <div className={containerClass} {...props}>
      {childrenArray}
    </div>
  );
};

Collapse.defaultProps = {
  shape: "basic",
  type: "basic",
};
