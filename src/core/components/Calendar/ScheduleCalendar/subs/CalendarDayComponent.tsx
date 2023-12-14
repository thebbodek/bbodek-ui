import clsx from "clsx";

import { CalendarComponentProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import Typography from "@/core/components/Typography";

interface CalendarDayComponentProps extends Omit<CalendarComponentProps, "onRender"> {
  calendarDates: CalendarDateDto[][];
}

export const CalendarDayComponent = ({
  defaultQuantity,
  schedulesData,
  calendarDates,
  onDateClick,
}: CalendarDayComponentProps) => {
  return(
    <>
      { calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key = {index}
          className = {"grid grid-cols-7 h-36 overflow-hidden"}
        >
          {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => {
            const currentDate: string = calendarDate.dayjs.format("YYYY-MM-DD");
            const currentSchedule = schedulesData && Object.keys(schedulesData).find(date => date === currentDate);
            let quantity = defaultQuantity;

            if(currentSchedule && schedulesData![currentSchedule].quantity) {
              quantity = schedulesData![currentSchedule].quantity;
            }

            return (
              <button
                key = {index}
                type = "button"
                disabled = {!calendarDate.isThisMonth}
                className = "flex-v-stack items-center h-full text-center"
                onClick = {(): void => onDateClick(currentDate)}
              >
                <div
                  className = {clsx("relative flex justify-center items-center h-8",
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
                  {quantity &&
                    <Typography
                      key = {index}
                      text = {`(${quantity})`}
                      className = "absolute top-[3px] end-0 translate-x-[calc(100%+0.625rem)]"
                      color = {`${!calendarDate.isThisMonth ? "gray-03" : quantity === defaultQuantity ? "gray-06" : "primary-03"}`}
                    />
                  }
                </div>
                {schedulesData && Object.keys(schedulesData).map(markedDate => (
                  (markedDate === calendarDate.dayjs.format("YYYY-MM-DD")) &&
                  <div className = "flex-v-stack gap-1 w-full pt-1" key = {markedDate}>
                    {
                      schedulesData[markedDate].markedDates?.slice(0, 2).map((markedDateValue, index) => (
                        <div
                          key = {index}
                          className = {`${!calendarDate.isThisMonth ? "bg-gray-00 text-primary-00" : "bg-primary-00 text-primary-02"}`}
                          >
                          &nbsp;
                          <Typography
                            theme = "body-02-bold"
                            text = {markedDateValue === undefined ? "" : markedDateValue}
                            className = "text-inherit"
                          />
                          &nbsp;
                        </div>
                      ))
                    }
                    {(schedulesData[markedDate].markedDates?.length ?? 0) > 2 &&
                      <div className = "mt-1 px-[2px]">
                        <Typography
                          element = "p"
                          theme = "body-02-bold"
                          text = "더보기"
                          className = "bg-primary-02 rounded-2xl "
                          color = "white"
                        />
                      </div>
                    }
                  </div>
                ))}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
};
