import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";
import { CalendarHeader } from "@/core/components/Calendar/common/subs/CalendarHeader";
import { CalendarDayComponent } from "@/core/components/Calendar/ScheduleCalendar/subs/ComponentDayComponent";
import { CalendarComponentProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";

const ScheduleCalendar = ({
  markedDates,
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
        markedDates = {markedDates}
        calendarDates = {models.calendarDates}
        onDateClick = {onDateClick}
      />
    </div>
  );
};

export default ScheduleCalendar;
