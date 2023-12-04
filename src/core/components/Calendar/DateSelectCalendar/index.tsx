import clsx from "clsx";
import dayjs from "dayjs";
import { useState, useCallback, useEffect } from "react";

import { CalendarHeader } from "@/core/components/Calendar/common/subs/CalendarHeader";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";
import { CalendarComponentDayText } from "./subs/CalendarComponentDayText";
import { CalendarComponentDaySubText } from "./subs/CalendarComponentDaySubText";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { CalendarComponentProps, PeriodDates } from "./types/CalendarComponentProps";
import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";

export interface UseDateSelectCalendarResponse {
  models: {
    periodDateArray: string[];
  },
  operations: {
    setCalendarPeriodDates: (periodDates: PeriodDates) => void;
  }
}

export const useDateSelectCalendar = (): UseDateSelectCalendarResponse => {
  const [ periodDateArray, setPeriodDateArray ] = useState<string[]>([]);

  const setCalendarPeriodDates = useCallback((periodDates: PeriodDates) => {
    if(!periodDates.endDate || !periodDates.startDate) {
      return;
    }
    const startDate: dayjs.Dayjs = dayjs(periodDates.startDate);
    const endDate: dayjs.Dayjs = dayjs(periodDates.endDate);
    const diffDate: number = endDate.diff(startDate, "day");
    const newState: string[] = [];

    for (let i = 0; i <= diffDate; i++) {
      newState.push(startDate.add(i, "day").format("YYYY-MM-DD"));
    }
    setPeriodDateArray(newState);
  }, [setPeriodDateArray]);

  return {
    models: {
      periodDateArray,
    },
    operations: {
      setCalendarPeriodDates,
    },
  };
};

const DateSelectCalendar = ({
  selectedDate,
  currentMonth = dayjs(),
  disabledDates,
  onDateClick,
}: CalendarComponentProps) => {
  const { models: commonModels, operations: commonOperations } = useCalendar();
  const { models, operations } = useDateSelectCalendar();

  useEffect(() => {
    commonOperations.setInitialSelectedDayjs(currentMonth);
  }, []);

  return (
    <div className = {"flex flex-col h-full w-full"}>
      <CalendarHeader
        currentMonth = {commonModels.selectedDayjs.locale("ko").format("YYYY. MM")}
        onPreviousMonthClick = {commonOperations.onPreviousMonthClick}
        onNextMonthClick = {commonOperations.onNextMonthClick}
      />
      <CalendarWeekDayComponent />

      <div className = {clsx("mt-4")}>
        {
          commonModels.calendarDates.map((calendarWeekDates: CalendarDateDto[], index: number) => {
            return (
              <div key = {index} className = {clsx("grid grid-cols-7")}>
                {
                  calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => (
                    <div key = {index} className = {clsx("h-16")}>
                      <button
                        className = {"w-full h-full"}
                        disabled = {(!calendarDate.isThisMonth || disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD")))}
                        onClick = {(): void => {
                          const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
                          if (currentDate === selectedDate) {
                            return;
                          }
                          const prevDate: dayjs.Dayjs = dayjs(selectedDate);
                          const nowDate: dayjs.Dayjs = calendarDate.dayjs;
                          const isStartDate: boolean = !prevDate || prevDate <= nowDate;
                          const periodDates: PeriodDates = {
                            startDate: isStartDate ? prevDate.format("YYYY-MM-DD") : currentDate,
                            endDate: isStartDate ? currentDate : selectedDate,
                          };
                          operations.setCalendarPeriodDates(periodDates);
                          onDateClick(currentDate, periodDates);
                          return;
                        }}
                      >
                        <div className = {clsx("flex flex-col")}>
                          <CalendarComponentDayText
                            selectedDate = {selectedDate}
                            calendarDate = {calendarDate}
                            periodDateArray = {models.periodDateArray}
                          />
                          <CalendarComponentDaySubText
                            selectedDate = {selectedDate}
                            calendarDate = {calendarDate}
                            periodDateArray = {models.periodDateArray}
                          />
                        </div>
                      </button>
                    </div>
                  ))
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default DateSelectCalendar;
