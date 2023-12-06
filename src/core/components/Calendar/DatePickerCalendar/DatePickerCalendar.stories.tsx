import { useState } from "react";
import { Meta } from "@storybook/react";

import { PeriodDates } from "./types/CalendarComponentProps";
import DatePickerCalendar from "@/core/components/Calendar/DatePickerCalendar";

const meta = {
  title: "core/Calendar/DatePickerCalendar",
  component: DatePickerCalendar,
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;

export const Default = () => {
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "2023-12-08",
    endDate: "",
  });

  const onDateClick = (date: string, periodDates: PeriodDates) => {
    setSelectedDate(date);
    setPeriodDates(periodDates!);
  };

  console.log(periodDates);
  return (
    <div className = {"w-[500px] border rounded-3xl py-6"}>
      <DatePickerCalendar
        selectedDate = {selectedDate}
        periodDates = {periodDates}
        onDateClick = {onDateClick}
      />
    </div>
  );
};
