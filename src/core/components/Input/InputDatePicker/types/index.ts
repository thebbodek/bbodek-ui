import { DatePickerCalendarProps, PeriodDates } from "@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps";
import { InputBaseProps } from "../../InputBase/types";

export interface DatePickerProps extends Pick<DatePickerCalendarProps, "useHoliday" | "disabled" | "disabledDates" | "cutoffDate" | "cutoffAfterDate" | "initialDate" | "afterAllDate"> {
  isFixStartDate?: boolean;
  variants?: DatePickerCalendarProps["variants"];
  externalDates?: PeriodDates;
  closeButtonText?: string;
  isOpen: boolean;
  close: DatePickerCalendarProps["onDateClick"];
  useTab?: boolean;
  dateLabel?: DatePickerCalendarProps["label"];
  hasDatePickerTitle?: boolean;
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

export interface InputDatePickerProps extends
  Omit<DatePickerProps, "isOpen"| "close" | "periodDates" | "setPeriodDates" | "setIsAfterAllDate">,
  Pick<InputBaseProps<"input">, "feedback" | "feedbackColor" | "disabled" | "readOnly" | "required"> {
    inputClassName?: string;
    label?: string;
    getPeriodDates: DatePickerCalendarProps["onDateClick"];
    overlay: {
      open: (overlayElement: CreateOverlayElement) => void;
      close: () => void;
      exit: () => void;
    }
  }
