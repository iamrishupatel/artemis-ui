import React from "react";

export interface AvatarProps {
  /** The address of the image for an image avatar or image element */
  src?: string;
  /** This attribute defines the alternative text describing the image */
  alt?: string;
  /** Alternative text to show if `src` is not provided */
  text?: string;
  /** The shape of the avatar */
  shape?: "square" | "circle";
  /** The size of the avatar */
  size?: "sm" | "md" | "lg";
  /** Color of the avatar as a string in case `src` is not used */
  color?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  shape,
  size,
  text,
  color,
  ...props
}) => {
  const className = `art-avatar art-avatar-${size} art-avatar-${shape}`;
  return (
    <div className={className} style={{ background: color }} {...props}>
      {src ? <img className="ant-avatar-img" src={src} alt={alt} /> : text}
      {!src && !text && "AR"}
    </div>
  );
};

Avatar.defaultProps = {
  alt: "avatar",
};
