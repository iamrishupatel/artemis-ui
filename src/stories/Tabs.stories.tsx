import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  TabGroup,
  TabGroupProps,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
} from "../components/Tabs";

const meta: Meta = {
  title: "Tabs",
  component: TabGroup,
};
export default meta;

const Template: Story<TabGroupProps> = args => (
  <TabGroup {...args}>
    <Tabs>
      <Tab>Tab 01</Tab>
      <Tab>Tab 02</Tab>
      <Tab>Tab 03</Tab>
    </Tabs>
    <TabPanels>
      <TabPanel>
        <h3>TAB 01 Content</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          facilis eius commodi, animi saepe obcaecati architecto eveniet nam
          eaque, blanditiis magni ea iure velit aperiam iusto laudantium
          recusandae maiores dolorem.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>TAB 02 Content</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          facilis eius commodi, animi saepe obcaecati architecto eveniet nam
          eaque, blanditiis magni ea iure velit aperiam iusto laudantium
          recusandae maiores dolorem.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>TAB 03 Content</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          facilis eius commodi, animi saepe obcaecati architecto eveniet nam
          eaque, blanditiis magni ea iure velit aperiam iusto laudantium
          recusandae maiores dolorem.
        </p>
      </TabPanel>
    </TabPanels>
  </TabGroup>
);

export const Basic = Template.bind({});
export const Rounded = Template.bind({});
Rounded.args = {
  shape: "rounded",
};
