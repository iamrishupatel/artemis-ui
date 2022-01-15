import React, { FC, ReactChild, useState } from "react";

export interface TooltipProps {
  children: ReactChild;
  /** Message of tooltip that will be shown on hover */
  message: string;
  /** Placement of tooltip */
  placement: "top" | "bottom" | "left" | "right";
  /** Color of the tooltip */
  color?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  placement,
  message,
  color,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const messageClass = isActive
    ? `art-tooltip-message art-tooltip-message-${placement} active`
    : "art-tooltip-message";

  const tooltipEvents = {
    onMouseEnter: () => setIsActive(true),
    onMouseLeave: () => setIsActive(false),
  };
  let arrowStyle;

  // const
  switch (placement) {
    case "top":
      arrowStyle = {
        borderTopColor: color,
      };
      break;
    case "bottom":
      arrowStyle = {
        borderBottomColor: color,
      };
      break;
    case "left":
      arrowStyle = {
        borderLeftColor: color,
      };
      break;
    case "right":
      arrowStyle = {
        borderRightColor: color,
      };
      break;

    default:
      arrowStyle = {};
      break;
  }

  return (
    <div className="art-tooltip" {...props} {...tooltipEvents}>
      {children}
      <div className={messageClass} style={{ backgroundColor: color }}>
        {message}
        <span className="art-tooptip-arrow" style={arrowStyle} />
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  placement: "top",
};
