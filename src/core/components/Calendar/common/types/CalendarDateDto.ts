import dayjs from "dayjs";

export interface CalendarDateDto {
  dayjs: dayjs.Dayjs;
  isThisMonth: boolean;
  isToday: boolean;
  isHoliday: boolean;
}
