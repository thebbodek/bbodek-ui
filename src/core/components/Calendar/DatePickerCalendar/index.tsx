import clsx from "clsx";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";

import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";
import { CalendarHeader } from "@/core/components/Calendar/common/subs/CalendarHeader";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { CalendarComponentDaySubText } from "./subs/CalendarComponentDaySubText";
import { CalendarComponentDayText } from "./subs/CalendarComponentDayText";
import { DatePickerCalendarProps, DatePickerType, PeriodDates } from "./types/DatePickerCalendarProps";

export interface UseDatePickerCalendarResponse {
  models: {
    periodDates: PeriodDates;
    periodDateArray: string[];
  },
  operations: {
    setCalendarPeriodDates: (periodDates: PeriodDates) => void;
    setPeriodDates: React.Dispatch<React.SetStateAction<PeriodDates>>;
    onDateClick: (variants: DatePickerType, afterAllDate: boolean, calendarDate: CalendarDateDto) => void;
  }
}

export const useDatePickerCalendar = (): UseDatePickerCalendarResponse => {
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });
  const [ periodDateArray, setPeriodDateArray ] = useState<string[]>([]);

  const onDateClick = useCallback((variants: DatePickerType, afterAllDate: boolean, calendarDate: CalendarDateDto) => {
    const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
    const newPeriodDates = periodDates;

    if ((periodDates.startDate && periodDates.endDate) || afterAllDate) {
      newPeriodDates.startDate = currentDate;
      newPeriodDates.endDate = "";
      return;
    }

    if (variants === "period" && periodDates.startDate) {
      if (!dayjs(periodDates.startDate).isAfter(calendarDate.dayjs)) {
        newPeriodDates.endDate = currentDate;
      } else {
        newPeriodDates.startDate = currentDate;
        newPeriodDates.endDate = "";
      }
    } else {
      newPeriodDates.startDate = currentDate;
      newPeriodDates.endDate = "";
    }
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

const DatePickerCalendar = ({
  variants = "single",
  label = ["사용일"],
  initialDate,
  periodDates,
  disabledDates,
  cutoffDate,
  cutoffAfterDate,
  afterAllDate = false,
  monthButtonStatus,
  useHoliday = false,
  onDateClick,
}: DatePickerCalendarProps) => {
  const { models: commonModels, operations: commonOperations } = useCalendar(initialDate ? dayjs(initialDate): dayjs());
  const { models, operations } = useDatePickerCalendar();

  useEffect(() => {
    if (periodDates.startDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.startDate = periodDates.startDate;
      operations.setPeriodDates({ ...newPeriodDates });
      commonOperations.setInitialSelectedDayjs(dayjs(periodDates.startDate));
    }
  }, []);

  useEffect(() => {
    if (afterAllDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.endDate = "";
      operations.setPeriodDates({ ...newPeriodDates });
      operations.setCalendarPeriodDates({ startDate: "", endDate: "" });
      onDateClick(models.periodDates, true);
    }
  }, [afterAllDate]);

  useEffect(() => {
    operations.setPeriodDates({ ...periodDates });
    operations.setCalendarPeriodDates(periodDates);
  }, [periodDates]);

  const isCutoffDateValidation = ({ cutoffDate, cutoffAfterDate, calendarDate }: Pick<DatePickerCalendarProps, "cutoffDate" | "cutoffAfterDate"> & { calendarDate: string }) => {
    if(!cutoffDate && !cutoffAfterDate) return false;

    return !!cutoffDate && dayjs(calendarDate).isBefore(cutoffDate) || !!cutoffAfterDate && dayjs(calendarDate).isAfter(cutoffAfterDate);
  };

  return (
    <div className = {"flex flex-col h-full w-full"}>
      <CalendarHeader
        currentMonth = {commonModels.selectedDayjs.locale("ko").format("YYYY. MM")}
        onPreviousMonthClick = {commonOperations.onPreviousMonthClick}
        onNextMonthClick = {commonOperations.onNextMonthClick}
        monthButtonStatus = {monthButtonStatus}
      />
      <CalendarWeekDayComponent />
      <div className = {clsx("flex-v-stack gap-y-2 mt-4")}>
        {commonModels.calendarDates.map((calendarWeekDates: CalendarDateDto[], index: number) => (
          <div key = {index} className = {clsx("grid grid-cols-7")}>
            {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => {
              const disabled = (!useHoliday && calendarDate.isHoliday) || !calendarDate.isThisMonth || disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD")) || isCutoffDateValidation({ cutoffDate, cutoffAfterDate, calendarDate: calendarDate.dayjs.format("YYYY-MM-DD") });

              return (
                <div key = {index} className = {clsx("h-[3.75rem]")}>
                  <button
                    type = "button"
                    className = {"w-full h-full"}
                    disabled = {disabled}
                    onClick = {(): void => {
                      const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");

                      if (currentDate === periodDates.startDate) {
                        return;
                      }
                      operations.onDateClick(variants, afterAllDate, calendarDate);
                      operations.setCalendarPeriodDates(models.periodDates);
                      onDateClick(models.periodDates, afterAllDate);
                    }}
                  >
                    <div className = {clsx("flex flex-col")}>
                      <CalendarComponentDayText
                        disabled = {disabled}
                        calendarDate = {calendarDate}
                        periodDates = {models.periodDates}
                        periodDateArray = {models.periodDateArray}
                        afterAllDate = {afterAllDate}
                      />
                      <CalendarComponentDaySubText
                        calendarDate = {calendarDate}
                        periodDates = {models.periodDates}
                        label = {label}
                      />
                    </div>
                  </button>
                </div>);
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePickerCalendar;
