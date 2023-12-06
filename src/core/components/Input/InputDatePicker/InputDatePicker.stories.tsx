import { useState } from "react";
import { Meta } from "@storybook/react";

import { PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";
import InputDatePicker from "./index";

const meta = {
  title: "core/Input/InputDatePicker",
  component: InputDatePicker,
} satisfies Meta<typeof InputDatePicker>;

export default meta;

export const Default = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });

  const onDateClick = (date: string, periodDates: PeriodDates) => {
    setSelectedDate(date);
    setPeriodDates(periodDates!);
  };

  const onCalendarToggle = () => {
    setIsOpen(prev => !prev);
  };

  const onCalendarClose = () => {
    setIsOpen(false);
  };

  return (
    <div className = "flex gap-2">
      <div className = "w-[500px]">
        <InputDatePicker
          isOpen = {isOpen}
          periodDates = {periodDates}
          selectedDate = {selectedDate}
          onToggle = {onCalendarToggle}
          onDateClick = {onDateClick}
          onClose = {onCalendarClose}
          useTab = {true}
        />
      </div>
    </div>
  );
};
