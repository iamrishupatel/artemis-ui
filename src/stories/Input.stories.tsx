import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "../components/FormComponents";
import { AiOutlineEye, AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const meta: Meta = {
  title: "Input",
  component: Input,
};
export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Input",
  placeholder: "Type here",
  type: "text",
};
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: "Input",
  placeholder: "Type here",
  type: "text",
  leftIcon: <AiOutlineMail fontSize={"1.2rem"} />,
};
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "Input",
  placeholder: "Password",
  type: "password",
  rightIcon: <AiOutlineEye fontSize={"1.2rem"} />,
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  placeholder: "Password",
  type: "password",
  leftIcon: <AiOutlineLock fontSize={"1.2rem"} />,
  rightIcon: <AiOutlineEye fontSize={"1.2rem"} />,
};

export const Error = Template.bind({});
Error.args = {
  label: "Input",
  placeholder: "Type here",
  type: "text",
  error: "This is an error!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Input",
  placeholder: "Type here",
  type: "text",
  disabled: true,
};
