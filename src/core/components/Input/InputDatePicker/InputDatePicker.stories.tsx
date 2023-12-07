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

const DefaultLayout = () => {
  const overlay = useOverlay();

  return (
    <div className = "flex gap-2">
      <div className = "w-[500px]">
        <InputDatePicker overlay = {overlay} useTab />
      </div>
    </div>
  );
};

export const Default = () => {
  return (
    <OverlayProvider>
      <div id = "modal"/>
      <DefaultLayout />
    </OverlayProvider>
  );
};

const InputDatePickerInModalPopUpLayout = () => {
  const overlay = useOverlay();
  const inputDatePickerOverlay = useOverlay();
  const onOverlay = () => {
    overlay.open(({ isOpen }) => {
      return (
        <ModalPopUp isOpen = {isOpen}>
          <InputDatePicker overlay = {inputDatePickerOverlay} useTab = {false} />
        </ModalPopUp>
      );
    });
  };

  return (
    <button onClick = {onOverlay}>클릭</button>
  );
};

export const InputDatePickerInModalPopUp = () => {
  return (
    <OverlayProvider>
      <div id = "modal"/>
      <InputDatePickerInModalPopUpLayout />
    </OverlayProvider>
  );
};
