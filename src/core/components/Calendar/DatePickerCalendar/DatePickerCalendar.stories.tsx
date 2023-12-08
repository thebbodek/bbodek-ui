import { Meta } from "@storybook/react";
import { useState } from "react";

import DatePickerCalendar from "@/core/components/Calendar/DatePickerCalendar";
import { PeriodDates } from "./types/DatePickerCalendarProps";

const meta = {
  title: "core/Calendar/DatePickerCalendar",
  component: DatePickerCalendar,
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;

export const SingleDatePicker = () => {
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "2023-12-08",
    endDate: "",
  });

  const onDateClick = (date: PeriodDates) => {
    setPeriodDates(date);
  };

  return (
    <div className = {"w-[500px] border rounded-3xl py-6"}>
      <DatePickerCalendar
        variants = "single"
        label = {["해지 신청일"]}
        periodDates = {periodDates}
        onDateClick = {onDateClick}
      />
    </div>
  );
};

export const PeriodDatesPicker = () => {
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "2023-12-08",
    endDate: "",
  });

  const onDateClick = (date: PeriodDates) => {
    setPeriodDates(date!);
  };

  return (
    <div className = {"w-[500px] border rounded-3xl py-6"}>
      <DatePickerCalendar
        variants = "period"
        periodDates = {periodDates}
        onDateClick = {onDateClick}
      />
    </div>
  );
};

