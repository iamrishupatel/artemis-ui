import React, { FC } from "react";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export interface RateProps {
  value: number;
  max?: number;
  color?: string;
}

export const Rate: FC<RateProps> = ({ color, value, max }) => {
  const rating = new Array(max).fill(1, 0, value).fill(0, value, max);
  return (
    <div className="art-rate" style={{ color }}>
      {rating.map((num, index) => {
        if (num === 1) return <AiFillStar key={index} />;
        return <AiOutlineStar key={index} />;
      })}
    </div>
  );
};

Rate.defaultProps = {
  max: 5,
};
