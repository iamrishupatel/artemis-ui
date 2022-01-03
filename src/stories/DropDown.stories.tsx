import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  DropDown,
  DropDownItem,
  SubDropDown,
  DropDownProps,
} from "../components/DropDown/DropDown";
import { AiOutlineDown } from "react-icons/ai";


const meta: Meta = {
  title: "Dropdown",
  component: DropDown,
};
export default meta;

const Template: Story<DropDownProps> = args => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Click Me <AiOutlineDown />
    </div>
  ),
  children: <DropDownItem>Hello</DropDownItem>,
};

export const Nested = Template.bind({});
Nested.args = {
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Nested Dropdown <AiOutlineDown />
    </div>
  ),
  trigger: "hover",
  shape: "rounded",
  children: (
    <React.Fragment>
      <DropDownItem>Item 1</DropDownItem>
      <DropDownItem>Item 2</DropDownItem>
      <DropDownItem>Item 3 is a bit longer</DropDownItem>
      <SubDropDown label="nested dropdown >>" trigger="hover">
        <DropDownItem>Item A </DropDownItem>
        <DropDownItem>Item B </DropDownItem>
        <SubDropDown label="more >>" trigger="hover">
          <DropDownItem>Item 1</DropDownItem>
          <DropDownItem>Item 2 </DropDownItem>
        </SubDropDown>
      </SubDropDown>
      <DropDownItem>Item 5</DropDownItem>
    </React.Fragment>
  ),
};
