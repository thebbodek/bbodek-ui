import { DatePickerCalendarProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps";

export interface DatePickerProps extends Pick<DatePickerCalendarProps, "disabled" | "disabledDates" | "cutoffDate"> {
  variants?: DatePickerCalendarProps["variants"];
  externalDates?: PeriodDates;
  isOpen: boolean;
  close: (periodDates: PeriodDates) => void;
  useTab?: boolean;
  dateLabel?: DatePickerCalendarProps["label"]
}

type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;

export interface InputDatePickerProps extends Omit<DatePickerProps, "isOpen"| "close" | "periodDates" | "setPeriodDates"> {
  required?: boolean;
  inputClassName?: string;
  label?: string;
  getPeriodDates: (periodDates: PeriodDates) => void;
  dateLabel?: DatePickerCalendarProps["label"]
  overlay: {
    open: (overlayElement: CreateOverlayElement) => void;
    close: () => void;
    exit: () => void;
  }
}
