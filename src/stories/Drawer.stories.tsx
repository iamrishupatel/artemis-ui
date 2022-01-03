import React, { useState, Fragment } from "react";
import { Story, Meta } from "@storybook/react";
import { Drawer, DrawerProps } from "../components/Drawer/Drawer";
import { Button } from "..";

const meta: Meta = {
  title: "Drawer",
  component: Drawer,
};
export default meta;

const Template: Story<DrawerProps> = args => {
  const [isVisible, setIsVisible] = useState(false);
  const hideDrawer = () => {
    setIsVisible(false);
  };
  const showDrawer = () => {
    setIsVisible(true);
  };
  return (
    <Fragment>
      <Button shape="rounded" onClick={showDrawer}>
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isVisible={isVisible}
        onClose={hideDrawer}
      >
        <p>Drawer Content.....</p>
        <p>Drawer Content.....</p>
        <p>Drawer Content.....</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit
          debitis obcaecati soluta architecto ullam in, sint accusantium nemo
          itaque nihil sequi illo suscipit distinctio? Officiis recusandae quod
          quam voluptatem eos iure?
        </p>
      </Drawer>
    </Fragment>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  header : <h3>Basic Header</h3>
}

export const WithoutHeader = Template.bind({});
