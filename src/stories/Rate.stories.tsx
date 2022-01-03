import React from "react";
import {Story, Meta} from "@storybook/react"
import { Rate, RateProps } from "../components/Rate/Rate"

const meta:Meta = {
  title : "Rate",
  component : Rate,
}
export default meta;

const Template:Story<RateProps> = (args) => <Rate {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  value : 4
}
export const Coloured = Template.bind({})
Coloured.args = {
  color : "red",
  value : 4
}