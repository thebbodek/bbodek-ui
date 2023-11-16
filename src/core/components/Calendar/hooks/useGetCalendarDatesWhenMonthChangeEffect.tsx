import dayjs from "dayjs";
import { useEffect } from "react";

import { Weekdays } from "@/constants";
import { CalendarDateDto } from "@/core/components/Calendar/types/ICalendarDateDto";

export const useGetCalendarDatesWhenMonthChangeEffect = (
  selectedDayjs:dayjs.Dayjs,
  setCalendarDates: React.Dispatch<React.SetStateAction<CalendarDateDto[][]>>,
) => {
  useEffect(() => {
    function getNewCalendarDates () {
      const newCalendarDates: CalendarDateDto[][] = [];
      let calendarWeekDates: CalendarDateDto[] = [];
      let calendarDate: dayjs.Dayjs =
        (selectedDayjs.startOf("month").startOf("week").get("d") === Weekdays.SUNDAY)
          ? selectedDayjs.startOf("month").startOf("week")
          : selectedDayjs.subtract(1, "month").endOf("month").startOf("week");

      while (
        selectedDayjs.endOf("month").get("d") === Weekdays.SATURDAY
          ? calendarDate.isBefore(selectedDayjs.add(1, "month").startOf("month"))
          : calendarDate.isBefore(selectedDayjs.add(1, "month").startOf("month").endOf("week"))
        ) {
        calendarWeekDates.push({
          dayjs: calendarDate,
          isThisMonth: calendarDate.isSame(selectedDayjs, "month"),
          isToday: calendarDate.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD"),
        });

        if (calendarWeekDates.length === 7) {
          newCalendarDates.push(calendarWeekDates);
          calendarWeekDates = [];
        }

        calendarDate = calendarDate.add(1, "day");
      }

      return newCalendarDates;
    }

    const newCalendarDates: CalendarDateDto[][] = getNewCalendarDates();

    setCalendarDates(newCalendarDates);
  }, [selectedDayjs]);
};
