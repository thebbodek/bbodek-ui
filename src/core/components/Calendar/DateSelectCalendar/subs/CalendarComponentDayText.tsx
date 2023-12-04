import { cn } from "@/utilities/utils";
import { CalendarDateDto } from "@/core/components/Calendar/types/CalendarDateDto";

interface CalendarComponentDayTextProps {
  selectedDate: string;
  calendarDate: CalendarDateDto;
  periodDateArray?: string[];
}

export default function CalendarComponentDayText({
  selectedDate,
  calendarDate,
  periodDateArray,
}: CalendarComponentDayTextProps) {
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
            "rounded-s-full w-full bg-[#206FE4] text-white": isStartDate,
            "rounded-r-full w-full bg-[#206FE4] text-white": isEndDate,
            "w-full bg-[#206FE4] text-white": periodDateArray?.includes(currentDate),
            "rounded-full w-8 bg-[#206FE4] text-white": singleSelectedDate,
            "bg-[#C9CCCF] text-white rounded-full w-8": calendarDate.isToday,
            "text-[#C9CCCF]": !calendarDate.isThisMonth && !periodDateArray?.includes(currentDate) && !calendarDate.isToday!,
          },
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
}
