import clsx from "clsx";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";

import { useCalendar } from "@/core/components/Calendar/common/hooks/useCalendar";
import { CalendarHeader } from "@/core/components/Calendar/common/subs/CalendarHeader";
import { CalendarWeekDayComponent } from "@/core/components/Calendar/common/subs/CalendarWeekdayComponent";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import { DATE_PICKER_TYPE } from "./constants";
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

export const useDatePickerCalendar = ({ isFixStartDate }: Pick<DatePickerCalendarProps, "isFixStartDate">): UseDatePickerCalendarResponse => {
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });
  const [ periodDateArray, setPeriodDateArray ] = useState<string[]>([]);

  const onDateClick = useCallback((variants: DatePickerType, afterAllDate: boolean, calendarDate: CalendarDateDto) => {
    const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
    const newPeriodDates = periodDates;

    if ((periodDates.startDate && periodDates.endDate) || afterAllDate) {
      if(!isFixStartDate) {
        newPeriodDates.startDate = currentDate;
        newPeriodDates.endDate = "";

        return;
      } else {
        newPeriodDates.startDate = periodDates["startDate"];
        newPeriodDates.endDate = currentDate;

        return;
      }
    }

    if (variants === DATE_PICKER_TYPE["PERIOD"] && periodDates.startDate) {
      if(isFixStartDate) {
        newPeriodDates.endDate = currentDate;

        return;
      } else {
        if (!dayjs(periodDates.startDate).isAfter(calendarDate.dayjs)) {
          newPeriodDates.endDate = currentDate;
        } else {
          newPeriodDates.startDate = currentDate;
          newPeriodDates.endDate = "";
        }
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
  variants = DATE_PICKER_TYPE["SINGLE"],
  label = ["사용일"],
  initialDate,
  exceptionDay,
  periodDates,
  disabledDates,
  cutoffDate,
  cutoffAfterDate,
  afterAllDate = false,
  monthButtonStatus,
  isFixStartDate = false,
  useHoliday = false,
  onRender,
  onDateClick,
}: DatePickerCalendarProps) => {
  const { date: exceptionDate = "", label: exceptionLabel = "" } = exceptionDay ?? {};
  const { models: commonModels, operations: commonOperations } = useCalendar(initialDate ? dayjs(initialDate): dayjs());
  const { models, operations } = useDatePickerCalendar({ isFixStartDate });

  useEffect(() => {
    if (!onRender || commonModels.calendarDates.length <= 0) {
      return;
    }

    const calenderDatesEndWeek = commonModels.calendarDates[commonModels.calendarDates.length - 1];
    const calenderDatesEndWeekEndDay = calenderDatesEndWeek[calenderDatesEndWeek.length - 1];
    const renderDates: PeriodDates = {
      startDate: commonModels.calendarDates[0][0]?.dayjs.format("YYYY-MM-DD"),
      endDate: calenderDatesEndWeekEndDay?.dayjs.format("YYYY-MM-DD"),
    };

    onRender?.(renderDates);
  }, [commonModels.calendarDates]);

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
    <div className = {"flex-v-stack h-full w-full"}>
      <CalendarHeader
        currentMonth = {commonModels.selectedDayjs.locale("ko").format("YYYY. MM")}
        onPreviousMonthClick = {commonOperations.onPreviousMonthClick}
        onNextMonthClick = {commonOperations.onNextMonthClick}
        monthButtonStatus = {monthButtonStatus}
      />
      <CalendarWeekDayComponent className = "text-gray-06"/>
      <div className = {clsx("grid flex-1 gap-y-2 mt-4")}>
        {commonModels.calendarDates.map((calendarWeekDates: CalendarDateDto[], index: number) => (
          <div key = {index} className = {clsx("grid grid-cols-7")}>
            {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => {
              const disabled = (!useHoliday && calendarDate.isHoliday) || !calendarDate.isThisMonth || disabledDates?.includes(calendarDate.dayjs.format("YYYY-MM-DD")) || isCutoffDateValidation({ cutoffDate, cutoffAfterDate, calendarDate: calendarDate.dayjs.format("YYYY-MM-DD") });
              const currentDate = calendarDate.dayjs.format("YYYY-MM-DD");
              const isExceptionDate = exceptionDay ? exceptionDate === currentDate : false;

              return (
                <div key = {index}>
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
                        isExceptionDate = {isExceptionDate}
                      />
                      <CalendarComponentDaySubText
                        calendarDate = {calendarDate}
                        periodDates = {models.periodDates}
                        isExceptionDate = {isExceptionDate}
                        exceptionDateLabel = {exceptionLabel}
                        label = {label}
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePickerCalendar;
