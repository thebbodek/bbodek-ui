import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import clsx from "clsx";
import { DatePickerCalendarProps } from "../types/DatePickerCalendarProps";

interface CalendarComponentDaySubTextProps extends Pick<DatePickerCalendarProps, "label" | "periodDates">{
  calendarDate: CalendarDateDto;
}

export const CalendarComponentDaySubText = ({
  calendarDate,
  periodDates,
  label,
}: CalendarComponentDaySubTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate = isPeriod && periodDates.startDate === currentDate;
  const isEndDate = isPeriod && periodDates.endDate === currentDate;
  const singleSelectedDate = (periodDates.startDate && !periodDates.endDate) && currentDate === periodDates.startDate;

  return (
    <div
      className = {clsx("flex justify-center items-center text-sm font-light mt-0.5 z-10 whitespace-nowrap",
        (isStartDate || isEndDate || singleSelectedDate) ? "text-[#007BC7]" : "text-black",
      )}
    >&nbsp;
      {isStartDate ? label && label[0] ? label[0] : "시작일" : isEndDate ? label && label[1] ? label[1] : "종료일" : ""}
      {singleSelectedDate ? label && label[0] ? label[0] : "시작일" : (calendarDate.isToday ? "오늘" : "")}&nbsp;
    </div>
  );
};
