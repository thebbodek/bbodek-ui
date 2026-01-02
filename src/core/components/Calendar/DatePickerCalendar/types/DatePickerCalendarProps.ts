import { CalendarHeaderProps } from '../../common/types/CalendarHeader';
import { DATE_PICKER_TYPE } from '../constants';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';

export type DatePickerType =
  (typeof DATE_PICKER_TYPE)[keyof typeof DATE_PICKER_TYPE];

export interface PeriodDates {
  startDate: string;
  endDate: string;
}

export interface DatePickerCalendarProps extends Pick<
  CalendarHeaderProps,
  'monthButtonStatus'
> {
  variants: DatePickerType;
  exceptionDay?: {
    date: string;
    label: string;
  };
  isFixStartDate?: boolean;
  initialDate?: string;
  periodDates: PeriodDates;
  label: string[];
  disabledDates?: string[];
  temporaryDates?: string[];
  afterAllDate?: boolean;
  cutoffDate?: string;
  cutoffAfterDate?: string;
  disabled?: boolean;
  useHoliday?: boolean;
  onRender?: (renderDates: PeriodDates) => void;
  onDateClick: (periodDates: PeriodDates, afterAllDate?: boolean) => void;
}

export interface UseDatePickerCalendarResponse {
  models: {
    periodDates: PeriodDates;
    periodDateArray: string[];
  };
  operations: {
    setCalendarPeriodDates: (periodDates: PeriodDates) => void;
    setPeriodDates: React.Dispatch<React.SetStateAction<PeriodDates>>;
    handleDateClick: (
      variants: DatePickerType,
      afterAllDate: boolean,
      calendarDate: CalendarDateDto,
    ) => void;
  };
}

export interface DatePickerCalendarWeekProps extends Omit<
  DatePickerCalendarDayProps,
  'calendarDate'
> {
  calendarWeekDates: CalendarDateDto[];
}

export interface DatePickerCalendarDayProps
  extends
    Pick<
      DatePickerCalendarProps,
      | 'useHoliday'
      | 'disabledDates'
      | 'exceptionDay'
      | 'cutoffDate'
      | 'cutoffAfterDate'
      | 'temporaryDates'
      | 'onDateClick'
      | 'variants'
      | 'label'
      | 'afterAllDate'
    >,
    Pick<
      UseDatePickerCalendarResponse['operations'],
      'handleDateClick' | 'setCalendarPeriodDates'
    >,
    Pick<
      UseDatePickerCalendarResponse['models'],
      'periodDates' | 'periodDateArray'
    > {
  calendarDate: CalendarDateDto;
}
