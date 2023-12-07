import { Meta } from "@storybook/react";

import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import ModalPopUp from "../../Modal/ModalPopUp";
import InputDatePicker from "./index";

const meta = {
  title: "core/Input/InputDatePicker",
  parameters: {
    layout: "fullscreen",
  },
  component: InputDatePicker,
} satisfies Meta<typeof InputDatePicker>;

export default meta;

export const Default = () => {

  return (
    <OverlayProvider>
      <div id = "modal"/>
      <div className = "flex gap-2">
        <div className = "w-[500px]">
          <InputDatePicker useTab />
        </div>
      </div>
    </OverlayProvider>
  );
};

const Layout = () => {
  const overlay = useOverlay();
  const onOverlay = () => {
    overlay.open(({ isOpen }) => {
      return (
        <ModalPopUp isOpen = {isOpen}>
          <InputDatePicker useTab = {false} />
        </ModalPopUp>
      );
    });
  };

  return (
    <button onClick = {onOverlay}>클릭</button>
  );
};

export const ModalDatePicker = () => {
  return (
    <OverlayProvider>
      <div id = "modal"/>
      <Layout />
    </OverlayProvider>
  );
};
