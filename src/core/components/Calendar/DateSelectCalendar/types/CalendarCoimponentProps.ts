import dayjs from "dayjs";

export interface PeriodDates {
  startDate: string;
  endDate: string;
}

export interface CalendarComponentProps {
  selectedDate: string;
  currentMonth?: dayjs.Dayjs;
  disabledDates?: string[];
  onDateClick: (date: string, periodDates?: PeriodDates) => void;
}
