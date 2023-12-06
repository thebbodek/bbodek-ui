import { useState } from "react";
import { Meta } from "@storybook/react";

import { PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";
import InputDatePicker from "./index";
import Button from "../Button";

const meta = {
  title: "core/InputDatePicker",
  component: InputDatePicker,
} satisfies Meta<typeof InputDatePicker>;

export default meta;

export const Default = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ isDisabled, setIsDisabled ] = useState<boolean>(false);
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });

  const onDateClick = (date: string, periodDates: PeriodDates) => {
    setSelectedDate(date);
    setPeriodDates(periodDates!);
    console.log(date);
    console.log(periodDates);
  };

  const onCalendarToggle = () => {
    setIsOpen(prev => !prev);
  };

  const onCalendarClose = () => {
    setIsOpen(false);
  };

  const onDisabledClick = () => {
    setIsDisabled(prev => !prev);
    setPeriodDates({
      startDate: "",
      endDate: "",
    });
    setSelectedDate("");
  };

  return (
    <div className = "flex gap-2">
      <Button
        content = "Disabled"
        size = "h-60"
        backgroundColor = {isDisabled ? "gray-03" : "primary-03"}
        color = "white"
        className = "px-6"
        onClick = {onDisabledClick}
      />
      <div className = "w-[500px]">
        <InputDatePicker
          isOpen = {isOpen}
          periodDates = {periodDates}
          selectedDate = {selectedDate}
          onToggle = {onCalendarToggle}
          onDateClick = {onDateClick}
          onClose = {onCalendarClose}
          useTab = {true}
          disabled = {isDisabled}
        />
      </div>
    </div>
  );
};
