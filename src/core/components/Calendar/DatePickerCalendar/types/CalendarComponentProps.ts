import dayjs from "dayjs";

export interface PeriodDates {
  startDate: string;
  endDate: string;
}

export interface CalendarComponentProps {
  selectedDate: string;
  currentMonth?: dayjs.Dayjs;
  periodDates: PeriodDates;
  disabledDates?: string[];
  afterAllDate?: boolean;
  disabled?: boolean;
  onDateClick: (date: string, periodDates: PeriodDates) => void;
}
