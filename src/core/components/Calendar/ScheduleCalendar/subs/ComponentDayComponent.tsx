import clsx from "clsx";

import { CalendarComponentProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";
import { CalendarDateDto } from "@/core/components/Calendar/types/CalendarDateDto";
import Typography from "@/core/components/Typography";

interface CalendarDayComponentProps extends CalendarComponentProps {
  calendarDates: CalendarDateDto[][];
}

export const CalendarDayComponent = ({
  markedDates,
  calendarDates,
}: CalendarDayComponentProps) => {
  return(
    <>
      { calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key = {index}
          className = {"grid grid-cols-7 min-w-full w-full h-28"}
        >
          { calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) =>
            (
              <div key = {index} className = "flex-v-stack items-center h-full text-center">
                <div
                  className = {clsx("flex justify-center items-center h-8",
                  {
                    "w-8 rounded-full bg-gray-03": calendarDate.isToday,
                    "text-gray-03": !calendarDate.isThisMonth,
                  },
                )}>
                  <Typography
                    theme = "body-01-bold"
                    text = {`${calendarDate.dayjs.date()}`}
                    className = "text-inherit"
                  />
                </div>
                {
                  markedDates && Object.keys(markedDates).map(markedDate => (
                    markedDate === calendarDate.dayjs.format("YYYY-MM-DD") &&
                    <div className = "flex-v-stack gap-1 w-full pt-1" key = {markedDate}>
                      {markedDates?.[markedDate].map((markedDateValue, index) =>
                        (
                          (markedDateValue || markedDateValue === undefined) &&
                          <div key = {index} className = "bg-primary-00">
                            &nbsp;
                            <Typography theme = "body-02-bold" color = "primary-02" text = {markedDateValue === undefined ? "" : markedDateValue} />
                            &nbsp;
                          </div>
                        ),
                      )}
                    </div>
                  ))
                }
              </div>
            ),
          )}
        </div>
      ))}
    </>
  );
};
