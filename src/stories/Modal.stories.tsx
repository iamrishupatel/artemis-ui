import React, { useState, Fragment } from "react";
import { Story, Meta } from "@storybook/react";
import { Modal, ModalProps } from "../components/Modal/Modal";
import { Button } from "../";

const meta: Meta = {
  title: "Modal",
  component: Modal,
};

export default meta;
const Template: Story<ModalProps> = args => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <Modal {...args} visible={isModalVisible} onClose={hideModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam modi
        illo, ut adipisci ducimus laboriosam. Omnis vel nesciunt perferendis
        facere quod non unde dolor, sequi similique accusantium eveniet nisi
        nam!
      </Modal>
      <Button variant="primary-light" shape="rounded" onClick={showModal}>
        Click me to show Modal
      </Button>
    </Fragment>
  );
};
export const Basic = Template.bind({});


export const RoundedModal = Template.bind({});
RoundedModal.args = {
  title: "Rounded Modal",
  shape: "rounded",
};


export const ModalWithFooter = Template.bind({});
ModalWithFooter.args = {
  title: "I got some Footer ya!!",
  placement: "center",
  footer: (
    <div>
      <Button variant="danger-light" size="sm">
        HO HO HO
      </Button>
    </div>
  ),
};
