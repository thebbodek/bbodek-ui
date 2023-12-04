import { useState } from "react";
import { Meta } from "@storybook/react";

import { PeriodDates } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";
import DateSelect from "./index";
import dayjs from "dayjs";

const meta = {
  title: "core/DateSelect",
  component: DateSelect,
} satisfies Meta<typeof DateSelect>;

export default meta;

export const Default = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });

  const onDateClick = (date: string, periodDates?: PeriodDates) => {
    setSelectedDate(date);
    setPeriodDates(periodDates!);
  };

  const onCalendarToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div className = "w-[500px]">
        <DateSelect
          isOpen = {isOpen}
          currentMonth = {dayjs("2023-10-01")}
          periodDates = {periodDates}
          selectedDate = {selectedDate}
          onToggle = {onCalendarToggle}
          onDateClick = {onDateClick}
        />
      </div>
    </>
  );
};
