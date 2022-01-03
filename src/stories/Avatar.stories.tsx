import React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "../components/Avatar/Avatar";

const meta: Meta = {
  title: "Avatar",
  component: Avatar,
};
export default meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: "red",
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  src: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
