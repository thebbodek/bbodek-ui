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
    <div className = {"w-screen h-[1000px]"}>
      <ScheduleCalendar
        defaultQuantity = {25}
        schedulesData = {{
          "2023-11-30": {
            quantity: 10,
            markedDates: ["특강"],
          },
          "2023-12-01": {
            quantity: 10,
            markedDates: ["방학"],
          },
          "2023-12-02": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-03": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-04": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-05": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-06": {
            quantity: 10,
            markedDates: [ undefined, "견학" ],
          },
          "2023-12-07": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-08": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-09": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-10": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-11": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-12": {
            quantity: 10,
            markedDates: [undefined],
          },
          "2023-12-15": {
            quantity: 10,
            markedDates: ["정식 전환일"],
          },
        }}
        onDateClick = {onDateClick}
      />
    </div>
  );
};
