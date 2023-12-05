import clsx from "clsx";

import { CalendarComponentProps, MarkedDatesItemsProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import Typography from "@/core/components/Typography";

interface CalendarDayComponentProps extends CalendarComponentProps {
  calendarDates: CalendarDateDto[][];
}

export const CalendarDayComponent = ({
  markedDates,
  calendarDates,
  onDateClick,
}: CalendarDayComponentProps) => {
  return(
    <>
      { calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key = {index}
          className = {"grid grid-cols-7 min-w-full w-full h-28"}
        >
          {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => {
            const markedDate = markedDates?.find(item => item.date === calendarDate.dayjs.format("YYYY-MM-DD"));
            return (
              <button
                key = {index}
                type = "button"
                disabled = {!calendarDate.isThisMonth}
                className = "flex-v-stack items-center h-full text-center"
                onClick = {(): void => {
                  const currentDate: string = calendarDate.dayjs.format("YYYY-MM-DD");
                  const selectedMarkedDate: MarkedDatesItemsProps[] = markedDate ? markedDate.items : [];
                  onDateClick(currentDate, selectedMarkedDate);
                }}
              >
                <div
                  className = {clsx("flex justify-center items-center h-8",
                    {
                      "w-8 rounded-full bg-gray-03": calendarDate.isToday,
                      "text-gray-03": !calendarDate.isThisMonth,
                    },
                  )}
                >
                  <Typography
                    text = {`${calendarDate.dayjs.date()}`}
                    theme = "body-01-bold"
                    className = "text-inherit"
                  />
                </div>
                {markedDate && markedDate.items.map((item, index) =>
                  <div className = "flex-v-stack gap-1 w-full pt-1" key = {index}>
                    <div key = {index} className = "bg-primary-00">
                          &nbsp;
                      <Typography theme = "body-02-bold" color = "primary-02" text = {item.label === undefined ? "" : item.label} />
                          &nbsp;
                    </div>
                  </div>,
                  )}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
};
