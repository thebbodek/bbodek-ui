import dayjs from "dayjs";

import { CalendarDateDto } from "@/core/components/Calendar/types/CalendarDateDto";

export interface UseCalendarResponse {
  models: {
    selectedDayjs: dayjs.Dayjs;
    calendarDates: CalendarDateDto[][];
  }
  operations: {
    onPreviousMonthClick: () => void;
    onNextMonthClick: () => void;
  }
}
