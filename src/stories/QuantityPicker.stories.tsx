import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import {
  QuantityPicker,
  QuantityProps,
} from "../components/QuantityPicker/QuantityPicker";

const meta: Meta = {
  title: "Quantity Picker",
  component: QuantityPicker,
  argTypes: {
    max: {
      defaultValue: 10,
    },
  },
};

export default meta;

const Template: Story<QuantityProps> = args => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <QuantityPicker
      count={count}
      onDecrease={decrement}
      onIncrease={increment}
      {...args}
    />
  );
};

export const Basic = Template.bind({});
export const Rounded = Template.bind({});
Rounded.args = {
  shape: "rounded",
};
