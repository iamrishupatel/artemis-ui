import React from "react";
import { Story, Meta } from "@storybook/react";
import { Collapse, CollapseItem, CollapseProps } from "../components/Collapse";

const meta: Meta = {
  title: "Collapse",
  component: Collapse,
};
export default meta;

const Template: Story<CollapseProps> = args => (
  <Collapse {...args}>
    <CollapseItem title="Collapse Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      numquam, ut laborum excepturi atque reiciendis cumque nostrum adipisci
      perferendis? Unde voluptates nulla assumenda, nihil esse hic numquam
      veniam asperiores recusandae.
    </CollapseItem>
    <CollapseItem title="Collapse Item 2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      numquam, ut laborum excepturi atque reiciendis cumque nostrum adipisci
      perferendis? Unde voluptates nulla assumenda, nihil esse hic numquam
      veniam asperiores recusandae.
    </CollapseItem>
    <CollapseItem title="Collapse Item 3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      numquam, ut laborum excepturi atque reiciendis cumque nostrum adipisci
      perferendis? Unde voluptates nulla assumenda, nihil esse hic numquam
      veniam asperiores recusandae.
    </CollapseItem>
  </Collapse>
);

export const Basic = Template.bind({});

export const Border = Template.bind({});
Border.args = {
  type: "border",
};

export const Margin = Template.bind({});
Margin.args = {
  type: "margin",
};

export const Rounded = Template.bind({});
Rounded.args = {
  shape: "rounded",
};

export const RoundedWithBorder = Template.bind({});
RoundedWithBorder.args = {
  shape: "rounded",
  type: "border",
};
export const BorderWithMargin = Template.bind({});
BorderWithMargin.args = {
  type: "border-margin",
};
