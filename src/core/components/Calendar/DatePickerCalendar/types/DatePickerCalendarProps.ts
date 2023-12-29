import { DATE_PICKER_TYPE } from "../constants";

export type DatePickerType = typeof DATE_PICKER_TYPE[keyof typeof DATE_PICKER_TYPE];

export interface PeriodDates {
  startDate: string;
  endDate: string;
}

export interface DatePickerCalendarProps {
  variants: DatePickerType;
  periodDates: PeriodDates;
  label?: string[];
  disabledDates?: string[];
  afterAllDate?: boolean;
  cutoffDate?: string;
  disabled?: boolean;
  onDateClick: (periodDates: PeriodDates, afterAllDate?: boolean) => void;
}
