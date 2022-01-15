import React, { FC } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export interface QuantityProps {
  /**Shape of the picker */
  shape?: "rounded" | "basic";
  /* Max count allowed */
  max: number;
  /** Current count of the picker */
  count: number;
  /** Whether to allow negative numbers or not */
  allowNegative?: boolean;
  /** Disabled state of the picker */
  disabled?: boolean;
  /** Specify a callback that will be called
   *  when a user clicks plus icon,
   */
  onIncrease: () => void;
  /** Specify a callback that will be called
   *  when a user clicks minus icon,
   */
  onDecrease: () => void;
}

export const QuantityPicker: FC<QuantityProps> = ({
  count,
  shape,
  max,
  onIncrease,
  onDecrease,
  allowNegative,
  disabled,
}) => {
  const quantityClass = disabled
    ? `art-quantity-picker art-quantity-${shape} art-quantity-disabled`
    : `art-quantity-picker art-quantity-${shape}`;

  const handleIncrease = () => {
    if (count < max) {
      onIncrease();
    }
  };
  const handleDecrease = () => {
    if (count <= 0 && !allowNegative) {
      return;
    }
    onDecrease();
  };

  return (
    <div className={quantityClass}>
      <button className="art-quantity-action" onClick={handleIncrease}>
        <AiOutlinePlus />
      </button>
      <div className="art-quantity-count">{count}</div>
      <button className="art-quantity-action" onClick={handleDecrease}>
        <AiOutlineMinus />
      </button>
    </div>
  );
};

QuantityPicker.defaultProps = {
  allowNegative: false,
  disabled: false,
};
