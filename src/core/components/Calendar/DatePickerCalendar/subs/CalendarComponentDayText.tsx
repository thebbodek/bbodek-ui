import clsx from "clsx";

import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { PeriodDates } from "../types/DatePickerCalendarProps";

interface CalendarComponentDayTextProps {
  calendarDate: CalendarDateDto;
  afterAllDate: boolean;
  periodDates: PeriodDates;
  periodDateArray?: string[];
  disabled: boolean
}

export const CalendarComponentDayText = ({
  calendarDate,
  afterAllDate,
  periodDates,
  periodDateArray,
  disabled,
}: CalendarComponentDayTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate = isPeriod && (periodDates.startDate !== periodDates.endDate) && periodDates.startDate === currentDate;
  const isEndDate = isPeriod && (periodDates.startDate !== periodDates.endDate) && periodDates.endDate === currentDate;
  const singleSelectedDate = ((periodDates.startDate && !periodDates.endDate) || (periodDates.startDate === periodDates.endDate)) && currentDate === periodDates.startDate;

  return (
    <div
      className = {clsx("relative flex flex-col justify-between items-center",
        {
          "before:absolute before:translate-x-1/2 before:content-[''] before:w-1/2 before:h-full before:bg-primary-00 before:block before:z-20": isStartDate || isEndDate || afterAllDate && singleSelectedDate,
          "before:translate-x-1/2": isStartDate,
          "before:translate-x-[-50%]": isEndDate,
        },
    )}>
      <div
        className = {clsx("relative z-20 flex justify-center items-center h-[2.375rem] leading-none text-body-01-bold text-black",
          {
            "rounded-full w-[2.375rem] bg-primary-03 text-white": isStartDate || isEndDate || singleSelectedDate,
            "bg-gray-03 text-white rounded-full w-[2.375rem]": calendarDate.isToday,
            "w-full bg-primary-00 rounded-none !text-black": (periodDateArray?.slice(1, -1).includes(currentDate)) || (afterAllDate && calendarDate.dayjs.isAfter(periodDates.startDate)),
            "!text-[#1018284d]": disabled,
            "!text-white": calendarDate.isToday && disabled,
          },
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
};
