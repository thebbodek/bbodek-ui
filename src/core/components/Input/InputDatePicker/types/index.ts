import { CalendarComponentProps } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";
import { PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";

export interface InputDatePickerProps extends Omit<CalendarComponentProps, "afterAllDate"> {
  isOpen: boolean;
  periodDates: PeriodDates;
  useTab?: boolean;
  onToggle: () => void;
  onClose: () => void;
}
