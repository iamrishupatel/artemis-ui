import React, { FC } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export interface QuantityProps {
  shape?: "rounded" | "basic";
  max: number;
  count: number;
  allowNegative?: boolean;
  disabled?: boolean;
  onIncrease: () => void;
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
