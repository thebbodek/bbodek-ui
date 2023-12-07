import { Meta } from "@storybook/react";
import { OverlayProvider, useOverlay } from "@toss/use-overlay";
import { useState } from "react";

import { PeriodDates } from "../../Calendar/DatePickerCalendar/types/CalendarComponentProps";
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
  const [ myDates, setMyDates ] = useState({
    startDate: "",
    endDate: "",
  });
  const getDate = (periodDates: PeriodDates) => console.log(periodDates);

  const onDatesClick = () => setMyDates({ startDate: "22222", endDate: "1111" });

  return (
    <div className = "flex gap-2">
      <div className = "w-[500px]">
        <button onClick = {onDatesClick}>날짜 변경</button>
        <InputDatePicker overlay = {overlay} useTab getPeriodDates = {getDate} externalDates = {myDates} />
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
  const getDate = (periodDates: PeriodDates) => console.log(periodDates);

  const onOverlay = () => {
    overlay.open(({ isOpen }) => {
      return (
        <ModalPopUp isOpen = {isOpen}>
          <InputDatePicker overlay = {inputDatePickerOverlay} useTab = {false} getPeriodDates = {getDate} />
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
