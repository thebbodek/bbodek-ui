import { Meta } from "@storybook/react";
import { useEffect, useState } from "react";

import ScheduleCalendar from "@/core/components/Calendar/ScheduleCalendar";
const meta = {
  title: "core/Calendar/ScheduleCalendar",
  component: ScheduleCalendar,
} satisfies Meta<typeof ScheduleCalendar>;

export default meta;

export const Default = () => {
  const [ selectedDate, setSelectedDate ] = useState<string>("");

  const onDateClick = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className = {"w-screen"}>
      <ScheduleCalendar
        markedDates = {[
          { "2023-12-01": ["방학"] },
          { "2023-12-02": [undefined] },
          { "2023-12-03": [undefined] },
          { "2023-12-04": [undefined] },
          { "2023-12-05": [undefined] },
          { "2023-12-06": [undefined] },
          { "2023-12-07": [undefined] },
          { "2023-12-08": [undefined] },
          { "2023-12-09": [undefined] },
          { "2023-12-10": [undefined] },
          { "2023-12-11": [undefined] },
          { "2023-12-15": ["정식 전환일"] },
        ]}
        onDateClick = {onDateClick}
      />
    </div>
  );
};
