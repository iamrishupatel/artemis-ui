import React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  text?: string;
  shape?: "square" | "circle";
  size?: "sm" | "md" | "lg";
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
