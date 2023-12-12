import { CalendarDayComponent } from "@/core/components/Calendar/ScheduleCalendar/subs/CalendarDayComponent";
import { CalendarComponentProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";
import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";
import { CalendarHeader } from "@/core/components/Calendar/common/subs/CalendarHeader";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";

const ScheduleCalendar = ({
  schedulesData,
  onDateClick,
}: CalendarComponentProps) => {
  const { models, operations } = useCalendar();

  return (
    <div className = {"flex flex-col h-full w-full"}>
      <CalendarHeader
        currentMonth = {models.selectedDayjs.locale("ko").format("YYYY. MM")}
        onPreviousMonthClick = {operations.onPreviousMonthClick}
        onNextMonthClick = {operations.onNextMonthClick}
      />
      <CalendarWeekDayComponent />
      <CalendarDayComponent
        schedulesData = {schedulesData}
        calendarDates = {models.calendarDates}
        onDateClick = {onDateClick}
      />
    </div>
  );
};

export default ScheduleCalendar;
