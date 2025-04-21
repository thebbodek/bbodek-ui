import clsx from 'clsx';

import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import { PeriodDates } from '../types/DatePickerCalendarProps';

interface CalendarComponentDayTextProps {
  calendarDate: CalendarDateDto;
  afterAllDate: boolean;
  periodDates: PeriodDates;
  periodDateArray?: string[];
  disabled: boolean;
  isExceptionDate: boolean;
  isTemporaryDate: boolean;
}

export const CalendarComponentDayText = ({
  calendarDate,
  afterAllDate,
  periodDates,
  periodDateArray,
  isExceptionDate,
  isTemporaryDate,
  disabled,
}: CalendarComponentDayTextProps) => {
  const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate =
    isPeriod &&
    periodDates.startDate !== periodDates.endDate &&
    periodDates.startDate === currentDate;
  const isEndDate =
    isPeriod &&
    periodDates.startDate !== periodDates.endDate &&
    periodDates.endDate === currentDate;
  const singleSelectedDate =
    ((periodDates.startDate && !periodDates.endDate) ||
      periodDates.startDate === periodDates.endDate) &&
    currentDate === periodDates.startDate;

  const isActiveDate = isStartDate || isEndDate || singleSelectedDate;
  const isMarkedDate = isActiveDate || calendarDate.isToday || isExceptionDate;
  const isMarkedPeriod =
    periodDateArray?.slice(1, -1).includes(currentDate) ||
    (afterAllDate && calendarDate.dayjs.isAfter(periodDates.startDate));

  return (
    <div
      className={clsx('relative flex flex-col items-center justify-between', {
        "before:bg-primary-00 before:absolute before:z-20 before:block before:h-full before:w-1/2 before:translate-x-1/2 before:content-['']":
          isStartDate || isEndDate || (afterAllDate && singleSelectedDate),
        'before:translate-x-1/2': isStartDate,
        'before:translate-x-[-50%]': isEndDate,
      })}
    >
      <div
        className={clsx(
          'text-body-02-bold md:text-body-01-bold relative z-20 flex h-[2rem] items-center justify-center leading-none text-black md:h-[2.375rem]',
          !isExceptionDate && disabled
            ? !isActiveDate
              ? 'text-gray-05'
              : 'text-white'
            : isMarkedDate || isTemporaryDate
              ? 'text-white'
              : 'text-black',
          (isMarkedDate || isTemporaryDate) &&
            'h-[2rem] w-[2rem] rounded-full md:h-[2.375rem] md:w-[2.375rem]',
          isActiveDate && 'bg-primary-03',
          calendarDate.isToday &&
            'bg-gray-03 h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem]',
          !isExceptionDate && !disabled && isTemporaryDate && 'bg-error',
          isExceptionDate && 'bg-gray-05',
          isMarkedPeriod &&
            !isTemporaryDate &&
            'bg-primary-00 w-full rounded-none',
          isMarkedPeriod && isTemporaryDate && 'bg-error w-full! rounded-none',
          isMarkedPeriod && calendarDate.isToday && 'text-primary-03! w-full!',
          isActiveDate && disabled && 'bg-primary-01',
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
};
