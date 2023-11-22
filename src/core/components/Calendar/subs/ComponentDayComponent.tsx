import { JSX } from "react";
import clsx from "clsx";
import dayjs from "dayjs";

import { CalendarDateDto } from "@/core/components/Calendar/types/ICalendarDateDto";
import { CalendarComponentProps } from "@/core/components/Calendar/types/ICalendarComponentProps";

interface CalendarDayComponentProps extends CalendarComponentProps {
  calendarDates: CalendarDateDto[][];
  onDateClick: (calendarDate: CalendarDateDto) => void;
  periodDates: string[];
  selectedDate: dayjs.Dayjs | undefined;
}

export const CalendarDayComponent = ({
  markedDates,
  disabledDates,
  calendarDates,
  onDateClick,
  periodDates,
  selectedDate,
}: CalendarDayComponentProps): JSX.Element => {
  const ifStartAndEndDatesAreTheSame = periodDates[0] !== periodDates[periodDates.length - 1];

  const ifSelectedDateIsEqualToToday = (calendarDate: CalendarDateDto) => {
    return periodDates[0] === calendarDate.dayjs.format("YYYY-MM-DD");
  };

  const ifEndDateIsEqualToToday = (calendarDate: CalendarDateDto) => {
    return periodDates[periodDates.length - 1] === calendarDate.dayjs.format("YYYY-MM-DD");
  };

  return(
    <>
      { calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key = {index}
          className = {"min-w-full h-full flex-row justify-center items-center grid grid-cols-7"}
        >
          { calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => (
            <div
              className = {"flex flex-col"}
              key = {index}
            >
              <button
                onClick = {() => onDateClick(calendarDate)}
                disabled = {disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD"))}
                className = {clsx("flex flex-col relative justify-start items-center h-[80px]",
                  {
                    "text-gray-08": disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD")),
                    "text-white": ifSelectedDateIsEqualToToday(calendarDate) ||
                      ifEndDateIsEqualToToday(calendarDate) ||
                      selectedDate === calendarDate.dayjs,
                  },
                )}
              >
                {
                  calendarDate.dayjs.date()
                }
                {
                  calendarDate.isToday &&
                  <div className = {"absolute top-[-4px] w-[35px] h-[35px] rounded-full bg-[#206FE4] opacity-10"}/>
                }
                {
                  periodDates!.length === 0 &&
                  selectedDate === calendarDate.dayjs &&
                  <div className = {"absolute top-[-4px] w-[35px] h-[35px] rounded-full bg-primary-03 -z-10"}/>
                }
                {
                  Object.keys(markedDates!).map(markedDate => (
                      markedDate === calendarDate.dayjs.format("YYYY-MM-DD") &&
                      <div className = {"flex-v-stack"} key = {markedDate}>
                        {
                          markedDates?.[markedDate].map((markedDateValue, index) => (
                            <div key = {index}>
                              {markedDateValue}
                            </div>
                          ))
                        }
                      </div>
                    ),
                  )
                }
                {
                  ifStartAndEndDatesAreTheSame &&
                  periodDates.slice(1, -1).includes(calendarDate.dayjs.format("YYYY-MM-DD")) &&
                  <div className = {"absolute top-[-4px] w-full h-[30px] bg-primary-00 -z-10"}/>
                }
                {
                  ifStartAndEndDatesAreTheSame &&
                  ifSelectedDateIsEqualToToday(calendarDate) &&
                  <div className = {"absolute top-[-4px] w-full h-[30px] rounded-l-full bg-primary-03 -z-10"}/>
                }
                {
                  ifStartAndEndDatesAreTheSame &&
                  ifEndDateIsEqualToToday(calendarDate) &&
                  <div className = {"absolute top-[-4px] w-full h-[30px] rounded-r-full bg-primary-03 -z-10"}/>
                }
                {
                  ifSelectedDateIsEqualToToday(calendarDate) &&
                  ifEndDateIsEqualToToday(calendarDate) &&
                  <div className = {"absolute top-[-4px] w-[35px] h-[35px] rounded-full bg-primary-03 -z-10"}/>
                }
              </button>
            </div>
          ))
          }
        </div>
      ))}
    </>
  );
};
