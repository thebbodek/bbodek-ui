import { InputHTMLAttributes } from 'react';

import {
  DatePickerCalendarProps,
  PeriodDates,
} from '@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import { InputBaseProps } from '../../InputBase/types';

export interface DatePickerProps
  extends Pick<
    DatePickerCalendarProps,
    | 'useHoliday'
    | 'disabled'
    | 'disabledDates'
    | 'cutoffDate'
    | 'cutoffAfterDate'
    | 'initialDate'
    | 'afterAllDate'
    | 'temporaryDates'
  > {
  isFixStartDate?: boolean;
  variants?: DatePickerCalendarProps['variants'];
  externalDates?: PeriodDates;
  closeButtonText?: string;
  isOpen: boolean;
  close: DatePickerCalendarProps['onDateClick'];
  useTab?: boolean;
  dateLabel: DatePickerCalendarProps['label'];
  hasDatePickerTitle?: boolean;
}

export interface InputDatePickerProps
  extends Omit<
      DatePickerProps,
      | 'isOpen'
      | 'close'
      | 'periodDates'
      | 'setPeriodDates'
      | 'setIsAfterAllDate'
    >,
    Pick<
      InputBaseProps<'input'>,
      | 'error'
      | 'feedback'
      | 'feedbackColor'
      | 'disabled'
      | 'readOnly'
      | 'required'
      | 'sub'
      | 'badge'
      | 'className'
    >,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  inputClassName?: string;
  label?: string;
  getPeriodDates: DatePickerCalendarProps['onDateClick'];
}
