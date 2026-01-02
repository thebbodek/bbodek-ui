import clsx from 'clsx';
import { memo } from 'react';

import { CalendarComponentDaySubText } from '@/core/components/Calendar/DatePickerCalendar/subs/CalendarComponentDaySubText';
import { CalendarComponentDayText } from '@/core/components/Calendar/DatePickerCalendar/subs/CalendarComponentDayText';
import {
  DatePickerCalendarDayProps,
  DatePickerCalendarProps,
} from '@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import { getDayjs } from '@/utilities/day';

const DatePickerCalendarDay = ({
  useHoliday,
  disabledDates,
  periodDates,
  periodDateArray,
  exceptionDay,
  calendarDate,
  cutoffDate,
  cutoffAfterDate,
  temporaryDates,
  onDateClick,
  variants,
  label,
  afterAllDate = false,
  handleDateClick,
  setCalendarPeriodDates,
}: DatePickerCalendarDayProps) => {
  const { startDate, endDate } = periodDates;
  const { date: exceptionDate = '', label: exceptionLabel = '' } =
    exceptionDay ?? {};
  const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
  const isExceptionDate = exceptionDay ? exceptionDate === currentDate : false;
  const isTemporaryDate = temporaryDates?.includes(currentDate) ?? false;

  const isCutoffDateValidation = ({
    cutoffDate,
    cutoffAfterDate,
    calendarDate,
  }: Pick<DatePickerCalendarProps, 'cutoffDate' | 'cutoffAfterDate'> & {
    calendarDate: string;
  }) => {
    if (!cutoffDate && !cutoffAfterDate) return false;

    return (
      (!!cutoffDate && getDayjs(calendarDate).isBefore(cutoffDate)) ||
      (!!cutoffAfterDate && getDayjs(calendarDate).isAfter(cutoffAfterDate))
    );
  };

  const disabled =
    (!useHoliday && calendarDate.isHoliday) ||
    !calendarDate.isThisMonth ||
    disabledDates?.includes(calendarDate.dayjs.format('YYYY-MM-DD')) ||
    isCutoffDateValidation({
      cutoffDate,
      cutoffAfterDate,
      calendarDate: calendarDate.dayjs.format('YYYY-MM-DD'),
    });

  return (
    <button
      type='button'
      className={'h-full w-full'}
      disabled={disabled}
      onClick={(): void => {
        if (startDate === endDate && endDate === currentDate) {
          return;
        }

        handleDateClick(variants, afterAllDate, calendarDate);
        setCalendarPeriodDates(periodDates);
        onDateClick(periodDates, afterAllDate);
      }}
    >
      <div className={clsx('flex flex-col')}>
        <CalendarComponentDayText
          disabled={disabled}
          calendarDate={calendarDate}
          periodDates={periodDates}
          periodDateArray={periodDateArray}
          afterAllDate={afterAllDate}
          isExceptionDate={isExceptionDate}
          isTemporaryDate={isTemporaryDate}
        />
        <CalendarComponentDaySubText
          calendarDate={calendarDate}
          periodDates={periodDates}
          disabled={disabled}
          isExceptionDate={isExceptionDate}
          isTemporaryDate={isTemporaryDate}
          exceptionDateLabel={exceptionLabel}
          label={label}
        />
      </div>
    </button>
  );
};

export default memo(DatePickerCalendarDay);
