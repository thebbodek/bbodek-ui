import { useCallback, useState } from "react";
import dayjs from "dayjs";

import { useSetPeriodDatesEffectWhenDateChanges } from "@/core/components/Calendar/hooks/useSetPeriodDatesEffectWhenDateChanges";
import { useGetCalendarDatesWhenMonthChangeEffect } from "@/core/components/Calendar/hooks/useGetCalendarDatesWhenMonthChangeEffect";
import { UseCalendarResponse } from "@/core/components/Calendar/types/IUseCalendarResponse";
import { CalendarDateDto } from "@/core/components/Calendar/types/ICalendarDateDto";

export const useCalendar = (): UseCalendarResponse => {
  const [ selectedDayjs, setSelectedDayjs ] = useState<dayjs.Dayjs>(dayjs());
  const [ calendarDates, setCalendarDates ] = useState<CalendarDateDto[][]>([[]]);
  const [ startDayjs, setStartDayjs ] = useState<dayjs.Dayjs | undefined>();
  const [ endDayjs, setEndDayjs ] = useState<dayjs.Dayjs | undefined>();
  const [ periodDates, setPeriodDates ] = useState<string[]>([]);

  const onDateClick = useCallback((calendarDate: CalendarDateDto) => {
    if (startDayjs && endDayjs) {
      setStartDayjs(calendarDate.dayjs);
      setEndDayjs(undefined);
      setPeriodDates([]);
      return;
    }
    if (startDayjs) {
      startDayjs.isAfter(calendarDate.dayjs) ? setStartDayjs(calendarDate.dayjs) : setEndDayjs(calendarDate.dayjs);
      return;
    }
    setStartDayjs(calendarDate.dayjs);
  }, [ startDayjs, endDayjs ]);

  const onPreviousMonthClick = useCallback(() => {
    const prevMonth: dayjs.Dayjs = selectedDayjs.subtract(1, "month");
    setSelectedDayjs(prevMonth);
  }, [selectedDayjs]);

  const onNextMonthClick = useCallback(() => {
    const nextMonth: dayjs.Dayjs = selectedDayjs.add(1, "month");
    setSelectedDayjs(nextMonth);
  }, [selectedDayjs]);

  useSetPeriodDatesEffectWhenDateChanges(startDayjs, endDayjs, setPeriodDates);
  useGetCalendarDatesWhenMonthChangeEffect(selectedDayjs, setCalendarDates);

  return {
    models: {
      startDayjs,
      endDayjs,
      periodDates,
      selectedDayjs,
      calendarDates,
    },
    operations: {
      onPreviousMonthClick,
      onNextMonthClick,
      onDateClick,
    },
  };
};
