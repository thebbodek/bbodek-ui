import { DatePickerCalendarProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps";

export interface DatePickerProps extends Pick<DatePickerCalendarProps, "disabled" | "disabledDates"> {
  externalDates?: PeriodDates;
  isOpen: boolean;
  close: (periodDates: PeriodDates) => void;
  useTab?: boolean;
}

type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;

export interface InputDatePickerProps extends Omit<DatePickerProps, "isOpen"| "close" | "periodDates" | "setPeriodDates"> {
  getPeriodDates: (periodDates: PeriodDates) => void;
  overlay: {
    open: (overlayElement: CreateOverlayElement) => void;
    close: () => void;
    exit: () => void;
  }
}
