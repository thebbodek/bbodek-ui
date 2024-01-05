import { DatePickerCalendarProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps";

export interface DatePickerProps extends Pick<DatePickerCalendarProps, "disabled" | "disabledDates" | "cutoffDate" | "cutoffAfterDate" | "initialDate" | "afterAllDate"> {
  variants?: DatePickerCalendarProps["variants"];
  externalDates?: PeriodDates;
  isOpen: boolean;
  close: DatePickerCalendarProps["onDateClick"];
  useTab?: boolean;
  dateLabel?: DatePickerCalendarProps["label"]
}

type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;

export interface ExternalDates {
  startDate: string;
  endDate: string | null;
}

export interface InputDatePickerProps extends Omit<DatePickerProps, "isOpen"| "close" | "periodDates" | "setPeriodDates" | "setIsAfterAllDate"> {
  required?: boolean;
  inputClassName?: string;
  label?: string;
  getPeriodDates: DatePickerCalendarProps["onDateClick"];
  dateLabel?: DatePickerCalendarProps["label"]
  overlay: {
    open: (overlayElement: CreateOverlayElement) => void;
    close: () => void;
    exit: () => void;
  }
}
