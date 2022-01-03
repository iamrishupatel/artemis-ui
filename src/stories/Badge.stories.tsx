import React from "react";
import { Story, Meta } from "@storybook/react";
import { Badge, BadgeProps } from "../components/Badge/Badge";
import { AiFillTool } from "react-icons/ai";

const meta: Meta = {
  title: "Badge",
  component: Badge,
};

export default meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};
export const WithIcons = Template.bind({});
WithIcons.args = {
  children: "Primary",
  variant: "primary",
  icon : <AiFillTool/>
};


export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  variant: "warning",
};


export const Success = Template.bind({});
Success.args = {
  children: "Success",
  variant: "success",
};


export const Dark = Template.bind({});
Dark.args = {
  children: "Dark",
  variant: "dark",
};


export const DarkLight = Template.bind({});
DarkLight.args = {
  children: "Dark Light",
  variant: "dark-light",
};


export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Primary Light",
  variant: "primary-light",
};


export const WarningLight = Template.bind({});
WarningLight.args = {
  children: "Warning Light",
  variant: "warning-light",
};


export const SuccessLight = Template.bind({});
SuccessLight.args = {
  children: "Success Light",
  variant: "success-light",
};
