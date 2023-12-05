import { useState } from "react";
import { Meta } from "@storybook/react";

import { PeriodDates } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";
import DateSelect from "./index";

const meta = {
  title: "core/DateSelect",
  component: DateSelect,
} satisfies Meta<typeof DateSelect>;

export default meta;

export const Default = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "2023-12-21",
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

  return (
    <>
      <div className = "w-[500px]">
        <DateSelect
          isOpen = {isOpen}
          periodDates = {periodDates}
          selectedDate = {selectedDate}
          onToggle = {onCalendarToggle}
          onDateClick = {onDateClick}
          onClose = {onCalendarClose}
        />
      </div>
    </>
  );
};
