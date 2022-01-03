import React, { useState, KeyboardEvent } from "react";
import { Story, Meta } from "@storybook/react";
import { TextaAreaProps, TextArea } from "../components/FormComponents";

const meta: Meta = {
  
  title: "TextArea",
  component: TextArea,
};

export default meta;

const Template: Story<TextaAreaProps> = args => <TextArea {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Write a product description",
};
