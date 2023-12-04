import { useState } from "react";
import { Meta } from "@storybook/react";

import ScheduleCalendar from "@/core/components/Calendar/ScheduleCalendar";
import { MarkedDatesItemsProps } from "./types/CalendarComponentProps";
const meta = {
  title: "core/Calendar/ScheduleCalendar",
  component: ScheduleCalendar,
} satisfies Meta<typeof ScheduleCalendar>;

export default meta;

export const Default = () => {
  const [ selectedDate, setSelectedDate ] = useState<string>("");
  const [ markedDateValus, setMarkedDatesValue ] = useState<MarkedDatesItemsProps[]>([]);

  const onDateClick = (date: string, value: MarkedDatesItemsProps[]) => {
    setSelectedDate(date);
    setMarkedDatesValue(value);
    console.log(date);
    console.log(value);
  };

  console.log(selectedDate);
  console.log(markedDateValus);

  return (
    <div className = {"w-screen"}>
      <ScheduleCalendar
        markedDates = {[
          {
            date: "2023-12-01",
            items: [
              {
                label: "무료체험",
                memo: "무료체험이 15일 이후로 종료됩니다.",
              },
            ],
          },
          {
            date: "2023-12-02",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-03",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-04",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-05",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-06",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-07",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-08",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-09",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-10",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-11",
            items: [
              {
                label: undefined,
                memo: "",
              },
            ],
          },
          {
            date: "2023-12-15",
            items: [
              {
                label: "정식 전환일",
                memo: "",
              },
            ],
          },
        ]}
        onDateClick = {onDateClick}
      />
    </div>
  );
};
