import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";
import { FaRadiationAlt } from "react-icons/fa";

const meta: Meta = {
  title: "Button",
  component: Button,

  argTypes: {
    children: {
      defaultValue: "Text",
    },
  },
};
export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  variant: "primary-light",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};

export const DangerLight = Template.bind({});
DangerLight.args = {
  variant: "danger-light",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const SuccessLight = Template.bind({});
SuccessLight.args = {
  variant: "success-light",
};
