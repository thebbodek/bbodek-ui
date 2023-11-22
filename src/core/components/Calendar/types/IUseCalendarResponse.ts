import dayjs from "dayjs";

import { CalendarDateDto } from "@/core/components/Calendar/types/ICalendarDateDto";

export interface UseCalendarResponse {
  models: {
    startDayjs: dayjs.Dayjs | undefined;
    endDayjs: dayjs.Dayjs | undefined;
    selectedDayjs: dayjs.Dayjs;
    calendarDates: CalendarDateDto[][];
    periodDates: string[];
  }
  operations: {
    onPreviousMonthClick: () => void;
    onNextMonthClick: () => void;
    onDateClick: (calendarDate: CalendarDateDto) => void;
  }
}
