import { useState } from "react";
import dayjs from "dayjs";

import { Meta } from "@storybook/react";
import { PeriodDates } from "./types/CalendarCoimponentProps";
import DateSelectCalendar from "@/core/components/Calendar/DateSelectCalendar";

const meta = {
  title: "core/Calendar/DateSelectCalendar",
  component: DateSelectCalendar,
} satisfies Meta<typeof DateSelectCalendar>;

export default meta;

export const Default = () => {
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });

  const onDateClick = (date: string, periodDates?: PeriodDates) => {
    setSelectedDate(date);
    setPeriodDates(periodDates!);
  };

  console.log(periodDates);
  return (
    <div className = {"w-[500px] border rounded-3xl py-6"}>
      <DateSelectCalendar
        selectedDate = {selectedDate}
        currentMonth = {dayjs("2023-10-25")}
        onDateClick = {onDateClick}
      />
    </div>
  );
};
