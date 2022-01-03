import React from "react";
import { Story, Meta } from "@storybook/react";
import { Tooltip, TooltipProps } from "../components/Tooltip/Tooltip";
import { Button } from "../components/Button/Button";

const meta: Meta = {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    children: {
      defaultValue: "Hover me",
    },
  },
};

export default meta;

const Template: Story<TooltipProps> = args => (
  <div style={{ margin: "10rem" }}>
    <Tooltip {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  message: "Lorem ipsum dolor",
};
export const TooltipWithBtn = Template.bind({});
TooltipWithBtn.args = {
  color: "#271fe0",
  message: "tooltip with btn",
  children: <Button size="sm">Hover me</Button>,
};
