import { CalendarComponentProps } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";
import { PeriodDates } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";

export interface DateSelectProps extends Omit<CalendarComponentProps, "afterAllDate"> {
  isOpen: boolean;
  periodDates: PeriodDates;
  onToggle: () => void;
  onClose: () => void;
}
