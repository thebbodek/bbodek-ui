import clsx from "clsx";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { PeriodDates } from "../types/CalendarComponentProps";

interface CalendarComponentDaySubTextProps {
  calendarDate: CalendarDateDto;
  periodDates: PeriodDates;
}

export const CalendarComponentDaySubText = ({
  calendarDate,
  periodDates,
}: CalendarComponentDaySubTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate = isPeriod && periodDates.startDate === currentDate;
  const isEndDate = isPeriod && periodDates.endDate === currentDate;
  const singleSelectedDate = (periodDates.startDate && !periodDates.endDate) && currentDate === periodDates.startDate;

  return (
    <div
      className = {clsx("flex justify-center items-center text-sm font-light mt-1 z-10 whitespace-nowrap",
        (isStartDate || isEndDate || singleSelectedDate) ? "text-[#007BC7]" : "text-black",
      )}
    >&nbsp;
      {isStartDate ? "시작일" : isEndDate ? "종료일" : ""}
      {singleSelectedDate ? "시작일" : (calendarDate.isToday ? "오늘" : "")}&nbsp;
    </div>
  );
};
