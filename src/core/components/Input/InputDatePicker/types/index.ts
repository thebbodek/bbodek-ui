import { CalendarComponentProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";

export interface DatePickerProps extends Pick<CalendarComponentProps, "currentMonth" | "disabled" | "disabledDates"> {
  isOpen: boolean;
  close: (periodDates: PeriodDates) => void;
  useTab?: boolean;
}
export interface InputDatePickerProps extends Omit<DatePickerProps, "isOpen"| "close"> {}
