import { cn } from "@/utilities/utils";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";

interface CalendarComponentDayTextProps {
  selectedDate: string;
  calendarDate: CalendarDateDto;
  periodDateArray?: string[];
}

export const CalendarComponentDayText = ({
  selectedDate,
  calendarDate,
  periodDateArray,
}: CalendarComponentDayTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDateArray && periodDateArray.length > 0;
  const isStartDate = isPeriod && periodDateArray[0] === currentDate;
  const isEndDate = isPeriod && periodDateArray[periodDateArray.length - 1] === currentDate;
  const singleSelectedDate = !isPeriod && currentDate === selectedDate;
  return (
    <div className = {cn("flex flex-col justify-between items-center")}>
      <div
        className = {cn("flex justify-center items-center h-8 leading-none text-xs",
          {
            "relative rounded-full w-8 bg-primary-03 text-white": isStartDate || isEndDate || singleSelectedDate,
            "before:absolute before:translate-x-1/2 before:content-[''] before:w-[calc(100%+5px)] before:h-full before:bg-primary-00 before:block before:-z-10": isStartDate || isEndDate,
            "before:translate-x-1/2": isStartDate,
            "before:-translate-x-1/2": isEndDate,
            "w-full bg-primary-00": periodDateArray?.slice(1, -1).includes(currentDate),
            "bg-[#C9CCCF] text-white rounded-full w-8": calendarDate.isToday,
            "text-[#C9CCCF]": !calendarDate.isThisMonth && !periodDateArray?.includes(currentDate) && !calendarDate.isToday!,
          },
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
};
