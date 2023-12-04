import dayjs from "dayjs";
import { useCallback, useState } from "react";

import { useMonthChangeEffect } from "@/core/components/Calendar/hooks/useMonthChangeEffect";
import { CalendarDateDto } from "@/core/components/Calendar/types/CalendarDateDto";
import { UseCalendarResponse } from "@/core/components/Calendar/types/UseCalendarResponse";

export const useCalendar = (): UseCalendarResponse => {
  const [ selectedDayjs, setSelectedDayjs ] = useState<dayjs.Dayjs>(dayjs());
  const [ calendarDates, setCalendarDates ] = useState<CalendarDateDto[][]>([[]]);

  const onPreviousMonthClick = useCallback(() => {
    const prevMonth: dayjs.Dayjs = selectedDayjs.subtract(1, "month");
    setSelectedDayjs(prevMonth);
  }, [selectedDayjs]);

  const onNextMonthClick = useCallback(() => {
    const nextMonth: dayjs.Dayjs = selectedDayjs.add(1, "month");
    setSelectedDayjs(nextMonth);
  }, [selectedDayjs]);

  const setInitialSelectedDayjs = (selectedDayjs: dayjs.Dayjs) => {
    setSelectedDayjs(selectedDayjs);
  };

  useMonthChangeEffect(selectedDayjs, setCalendarDates);

  return {
    models: {
      selectedDayjs,
      calendarDates,
    },
    operations: {
      onPreviousMonthClick,
      onNextMonthClick,
      setInitialSelectedDayjs,
    },
  };
};
