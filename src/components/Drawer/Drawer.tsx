import React, { FC, ReactChild, MouseEvent } from "react";

export interface DrawerProps {
  header?: ReactChild;
  isVisible: boolean;
  onClose: () => void;
  children: ReactChild | ReactChild[];
  width?: string;
  height?: string;
  placement?: "left" | "right" | "top" | "bottom";
}

export const Drawer: FC<DrawerProps> = ({
  header,
  isVisible,
  children,
  onClose,
  placement,
  width,
  height,
}) => {
  const drawerContainerClass = isVisible
    ? "art-drawer-container active"
    : "art-drawer-container";

  const drawerClass = isVisible
    ? `art-drawer-${placement} active `
    : `art-drawer-${placement}`;

  const backdropClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLDivElement).classList.contains("art-drawer-container")) {
      onClose();
    }
  };
  let drawerStyle: {} = { width };

  if ((placement === "top" || placement === "bottom") && height) {
    drawerStyle = { height };
  }

  return (
    <div className={drawerContainerClass} onClick={backdropClickHandler}>
      <div className={drawerClass} style={drawerStyle}>
        {header && <div className="art-drawer-header">{header}</div>}
        <div className="art-drawer-content">{children}</div>
      </div>
    </div>
  );
};

Drawer.defaultProps = {
  width: "400px",
  placement: "right",
  height: "300px",
};
