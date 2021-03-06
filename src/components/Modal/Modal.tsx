import React, { FC, ReactChild, MouseEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface ModalProps {
  /** Width of the modal */
  width?: string;
  /**Whether the modal dialog is visible or not */
  visible: boolean;
  children: ReactChild | ReactChild[];
  /** Specify a callback that will be called
   *  when a user clicks mask(backdrop),
   */
  onClose: () => void;
  /** Footer element for the modal */
  footer?: ReactChild;
  /** The title of the modal */
  title: string;
  /** The shape of the modal */
  shape?: "rounded" | "basic";
  /** The placement of the modal */
  placement?: "topCenter" | "center";
}

export const Modal: FC<ModalProps> = ({
  visible,
  width,
  shape,
  onClose,
  children,
  title,
  footer,
  placement,
  ...props
}) => {
  const modalStyle = { width };

  const containerClass = visible
    ? `art-modal-container active ${placement}`
    : `art-modal-container ${placement}`;

  const modalClass = visible
    ? `art-modal active art-modal-${shape} `
    : `art-modal art-modal-${shape} `;

  const backdropClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLDivElement).classList.contains("art-modal-container")) {
      onClose();
    }
  };

  return (
    <div className={containerClass} {...props} onClick={backdropClickHandler}>
      <div className={modalClass} style={modalStyle}>
        <div className="art-modal-header">
          {title}
          <AiOutlineClose className="art-modal-close" onClick={onClose} />
        </div>
        <div className="art-modal-content">{children}</div>
        {footer && <div className="art-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  width: "32rem",
  title: "Basic Modal",
  shape: "basic",
  placement: "topCenter",
};
