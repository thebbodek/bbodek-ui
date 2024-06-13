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
}

export const CalendarComponentDayText = ({
  calendarDate,
  afterAllDate,
  periodDates,
  periodDateArray,
  isExceptionDate,
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
        "before:absolute before:z-20 before:block before:h-full before:w-1/2 before:translate-x-1/2 before:bg-primary-00 before:content-['']":
          isStartDate || isEndDate || (afterAllDate && singleSelectedDate),
        'before:translate-x-1/2': isStartDate,
        'before:translate-x-[-50%]': isEndDate,
      })}
    >
      <div
        className={clsx(
          'relative z-20 flex h-[2rem] items-center justify-center text-body-02-bold leading-none text-black md:h-[2.375rem] md:text-body-01-bold',
          !isExceptionDate && disabled
            ? 'text-gray-05'
            : isMarkedDate
              ? 'text-white'
              : 'text-black',
          isMarkedDate &&
            'h-[2rem] w-[2rem] rounded-full md:h-[2.375rem] md:w-[2.375rem]',
          isActiveDate && 'bg-primary-03',
          calendarDate.isToday &&
            'h-[2rem] w-[2rem] bg-gray-03 md:h-[2.375rem] md:w-[2.375rem]',
          isExceptionDate && 'bg-gray-05',
          isMarkedPeriod && 'w-full rounded-none bg-primary-00',
          isMarkedPeriod && calendarDate.isToday && '!w-full !text-primary-03',
          isActiveDate && disabled && 'bg-primary-01',
        )}
      >
        {calendarDate.dayjs.date()}
      </div>
    </div>
  );
};
