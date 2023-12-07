import { CalendarComponentProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/CalendarComponentProps";

export interface DatePickerProps extends Pick<CalendarComponentProps, "currentMonth" | "disabled" | "disabledDates"> {
  isOpen: boolean;
  close: (periodDates: PeriodDates) => void;
  useTab?: boolean;
}

type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;

export interface InputDatePickerProps extends Omit<DatePickerProps, "isOpen"| "close"> {
  overlay: {
    open: (overlayElement: CreateOverlayElement) => void;
    close: () => void;
    exit: () => void;
  }
}
