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
    periodDates: PeriodDates;
    periodDateArray: string[];
  },
  operations: {
    setCalendarPeriodDates: (periodDates: PeriodDates) => void;
    setPeriodDates: React.Dispatch<React.SetStateAction<PeriodDates>>;
    onDateClick: (afterAllDate: boolean, calendarDate: CalendarDateDto) => void;
  }
}

export const useDateSelectCalendar = (): UseDateSelectCalendarResponse => {
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });
  const [ periodDateArray, setPeriodDateArray ] = useState<string[]>([]);

  const onDateClick = useCallback((afterAllDate: boolean, calendarDate: CalendarDateDto) => {
    const curruntDate = calendarDate.dayjs.format("YYYY-MM-DD");
    const newPeriodDates = periodDates;

    if(!periodDates.startDate && !periodDates.endDate) {
      newPeriodDates.startDate = curruntDate;
      setPeriodDates({ ...newPeriodDates });
      return;
    }
    if ((periodDates.startDate && periodDates.endDate) || afterAllDate) {
      newPeriodDates.startDate = curruntDate;
      newPeriodDates.endDate = "";
      setPeriodDates({ ...newPeriodDates });
      return;
    }
    if (periodDates.startDate) {
      dayjs(periodDates.startDate).isAfter(calendarDate.dayjs) ? newPeriodDates.startDate = curruntDate : newPeriodDates.endDate = curruntDate;
      setPeriodDates({ ...newPeriodDates });
      return;
    }

    setPeriodDates({ ...newPeriodDates, startDate: curruntDate });
  }, [periodDates]);

  const setCalendarPeriodDates = useCallback((periodDates: PeriodDates) => {
    if(!periodDates.endDate || !periodDates.startDate) {
      setPeriodDateArray([]);
      return;
    }
    const newPeriodDateArray: string[] = [];
    const startDate: dayjs.Dayjs = dayjs(periodDates.startDate);
    const endDate: dayjs.Dayjs = dayjs(periodDates.endDate);
    const diffDate: number = endDate.diff(startDate, "day");

    for (let i = 0; i <= diffDate; i++) {
      newPeriodDateArray.push(startDate.add(i, "day").format("YYYY-MM-DD"));
    }
    setPeriodDateArray(newPeriodDateArray);
  }, [ periodDates, setPeriodDateArray ]);

  return {
    models: {
      periodDateArray,
      periodDates,
    },
    operations: {
      setCalendarPeriodDates,
      setPeriodDates,
      onDateClick,
    },
  };
};

const DateSelectCalendar = ({
  selectedDate,
  currentMonth = dayjs(),
  periodDates,
  disabledDates,
  afterAllDate = false,
  onDateClick,
}: CalendarComponentProps) => {
  const { models: commonModels, operations: commonOperations } = useCalendar();
  const { models, operations } = useDateSelectCalendar();

  useEffect(() => {
    commonOperations.setInitialSelectedDayjs(currentMonth);

    if (periodDates.startDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.startDate = periodDates.startDate;
      operations.setPeriodDates({ ...newPeriodDates });
      console.log(periodDates);
    }
  }, []);

  useEffect(() => {
    if (afterAllDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.endDate = "";
      operations.setPeriodDates({ ...newPeriodDates });
      operations.setCalendarPeriodDates({ startDate: "", endDate: "" });
      onDateClick(selectedDate, models.periodDates);
    }
  }, [afterAllDate]);

  return (
    <div className = {"flex flex-col h-full w-full"}>
      <CalendarHeader
        currentMonth = {commonModels.selectedDayjs.locale("ko").format("YYYY. MM")}
        onPreviousMonthClick = {commonOperations.onPreviousMonthClick}
        onNextMonthClick = {commonOperations.onNextMonthClick}
      />
      <CalendarWeekDayComponent />

      <div className = {clsx("mt-4")}>
        {commonModels.calendarDates.map((calendarWeekDates: CalendarDateDto[], index: number) => (
          <div key = {index} className = {clsx("grid grid-cols-7")}>
            {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => (
              <div key = {index} className = {clsx("h-16")}>
                <button
                  type = "button"
                  className = {"w-full h-full"}
                  disabled = {(!calendarDate.isThisMonth || disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD")))}
                  onClick = {(): void => {
                    const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");

                    if (currentDate === selectedDate) {
                      return;
                    }
                    operations.onDateClick(afterAllDate, calendarDate);
                    operations.setCalendarPeriodDates(models.periodDates);
                    onDateClick(currentDate, models.periodDates);
                  }}
                >
                  <div className = {clsx("flex flex-col")}>
                    <CalendarComponentDayText
                      calendarDate = {calendarDate}
                      periodDates = {models.periodDates}
                      periodDateArray = {models.periodDateArray}
                      afterAllDate = {afterAllDate}
                    />
                    <CalendarComponentDaySubText
                      calendarDate = {calendarDate}
                      periodDates = {models.periodDates}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSelectCalendar;
