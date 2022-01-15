import React, { FC, ReactChild, MouseEvent } from "react";

export interface DrawerProps {
  /** Header element for the drawer  */
  header?: ReactChild;
  /**Whether the Drawer dialog is visible or not */
  isVisible: boolean;
  /** Specify a callback that will be called
   *  when a user clicks mask(backdrop),
   */
  onClose: () => void;
  children: ReactChild | ReactChild[];
  /* Width of the drawer when placement is `top` or `bottom` */
  width?: string;
  /* Height of the drawer when placement is `top` or `bottom` */
  height?: string;
  /** The placement of the drawer */
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
