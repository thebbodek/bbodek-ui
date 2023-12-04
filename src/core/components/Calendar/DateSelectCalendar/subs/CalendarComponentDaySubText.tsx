import { cn } from "@/utilities/utils";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";

interface CalendarComponentDaySubTextProps {
  selectedDate: string;
  calendarDate: CalendarDateDto;
  periodDateArray?: string[];
}

export const CalendarComponentDaySubText = ({
  selectedDate,
  calendarDate,
  periodDateArray,
}: CalendarComponentDaySubTextProps) => {
  const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
  const isPeriod = periodDateArray && periodDateArray.length > 0;
  const isStartDate = isPeriod && periodDateArray[0] === currentDate;
  const isEndDate = isPeriod && periodDateArray[periodDateArray.length - 1] === currentDate;
  const singleSelectedDate = !isPeriod && currentDate === selectedDate;
  return (
    <div
      className = {cn("flex justify-center items-center text-sm font-light mt-1 z-10 whitespace-nowrap",
        (isStartDate || isEndDate || singleSelectedDate) ? "text-[#007BC7]" : "text-black",
      )}
    >&nbsp;
      {isStartDate ? "시작일" : isEndDate ? "종료일" : ""}
      {!isPeriod && selectedDate === currentDate ? "시작일" : (calendarDate.isToday ? "오늘" : "")}&nbsp;
    </div>
  );
};
