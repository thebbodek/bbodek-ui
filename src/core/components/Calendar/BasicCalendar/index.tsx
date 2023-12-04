import "dayjs/locale/ko";
import clsx from "clsx";

import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";
import { BasicCalendarProps } from "./types";
import Typography from "@/core/components/Typography";

const BasicCalendar = ({
  dottedDates,
}: BasicCalendarProps) => {
  const { models: commonModels } = useCalendar();

  return(
    <div className = {"flex flex-col h-full w-full"}>
      <Typography
        text = {commonModels.selectedDayjs.locale("ko").format("MM월 D일 (ddd)")}
        className = "mb-4"
      />
      <CalendarWeekDayComponent />

      <div className = "flex-v-stack h-full">
        { commonModels.calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
          <div key = {index} className = {clsx("flex-1 grid grid-cols-7")}>
            { calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => (
              <div key = {index} className = {"flex flex-col"}>
                <div className = "flex flex-col relative justify-start items-center">
                  <div
                    className = {clsx("relative flex justify-center items-center h-8 leading-none",
                      {
                        "before:absolute before:top-0 before:-start-1 before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-primary-03 before:block": dottedDates && dottedDates.includes(calendarDate.dayjs.format("YYYY-MM-DD")),
                        "bg-gray-03 rounded-full w-8": calendarDate.isToday,
                        "text-gray-03": !calendarDate.isThisMonth,
                      },
                    )}
                  >
                    <Typography text = {`${calendarDate.dayjs.date()}`} theme = "body-02-regular" className = "text-inherit" />
                  </div>
                </div>
              </div>
          ))
          }
          </div>
      ))}
      </div>
    </div>
  );
};

export default BasicCalendar;
