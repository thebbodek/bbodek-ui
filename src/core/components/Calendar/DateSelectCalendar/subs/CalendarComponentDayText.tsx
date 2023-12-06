import clsx from "clsx";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { PeriodDates } from "../types/CalendarComponentProps";

interface CalendarComponentDayTextProps {
  calendarDate: CalendarDateDto;
  afterAllDate: boolean;
  periodDates: PeriodDates;
  periodDateArray?: string[];
}

export const CalendarComponentDayText = ({
  calendarDate,
  afterAllDate,
  periodDates,
  periodDateArray,
}: CalendarComponentDayTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate = isPeriod && periodDates.startDate === currentDate;
  const isEndDate = isPeriod && periodDates.endDate === currentDate;
  const singleSelectedDate = (periodDates.startDate && !periodDates.endDate) && currentDate === periodDates.startDate;

  return (
    <div
      className = {clsx("relative flex flex-col justify-between items-center",
        {
          "before:absolute before:translate-x-1/2 before:content-[''] before:w-1/2 before:h-full before:bg-primary-00 before:block before:-z-10": isStartDate || isEndDate || afterAllDate && singleSelectedDate,
          "before:translate-x-1/2": isStartDate,
          "before:translate-x-[-50%]": isEndDate,
        },
    )}>
      <div
        className = {clsx("flex justify-center items-center h-8 leading-none text-xs",
          {
            "rounded-full w-8 bg-primary-03 text-white": isStartDate || isEndDate || singleSelectedDate,
            "bg-[#C9CCCF] text-white rounded-full w-8": calendarDate.isToday,
            "w-full bg-primary-00 rounded-none !text-gray-08": (periodDateArray?.slice(1, -1).includes(currentDate)) || (afterAllDate && calendarDate.dayjs.isAfter(periodDates.startDate)),
            "text-[#C9CCCF]": !calendarDate.isThisMonth && !periodDateArray?.includes(currentDate) && !calendarDate.isToday!,
          },
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
};
