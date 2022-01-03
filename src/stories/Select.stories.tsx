import React, { Fragment } from "react";
import { Story, Meta } from "@storybook/react";
import {
  Option,
  Select,
  SelectProps,
} from "../components/FormComponents";

const meta: Meta = {
  title: "Select",
  component: Select,
};

export default meta;


const Template: Story<SelectProps> = ({ ...args }) => (
  <Select defaultValue="select" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Fragment>
      <Option value="select" disabled>
        SELECT A BRAND
      </Option>
      <Option value="nike">NIKE</Option>
      <Option value="puma">PUMA</Option>
      <Option value="reebok">REEBOK</Option>
    </Fragment>
  ),
};
