import { CalendarComponentProps } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";
import { PeriodDates } from "@/core/components/Calendar/DateSelectCalendar/types/CalendarComponentProps";

export interface DateSelectProps extends CalendarComponentProps {
  isOpen: boolean;
  periodDates: PeriodDates;
  onToggle: () => void;
  onClose: () => void;
}
