import { CalendarHeaderProps } from "../../common/types/CalendarHeader";
import { DATE_PICKER_TYPE } from "../constants";

export type DatePickerType = typeof DATE_PICKER_TYPE[keyof typeof DATE_PICKER_TYPE];

export interface PeriodDates {
  startDate: string;
  endDate: string;
}

export interface DatePickerCalendarProps extends Pick<CalendarHeaderProps, "monthButtonStatus">{
  variants: DatePickerType;
  exceptionDay?: {
    date: string,
    label: string,
  }
  isFixStartDate?: boolean;
  initialDate?: string;
  periodDates: PeriodDates;
  label?: string[];
  disabledDates?: string[];
  afterAllDate?: boolean;
  cutoffDate?: string;
  cutoffAfterDate?: string;
  disabled?: boolean;
  useHoliday?: boolean;
  onRender?: (renderDates: PeriodDates) => void;
  onDateClick: (periodDates: PeriodDates, afterAllDate?: boolean) => void;
}
