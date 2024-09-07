import clsx from 'clsx';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarHeader } from '@/core/components/Calendar/common/subs/CalendarHeader';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import { DATE_PICKER_TYPE } from './constants';
import {
  DatePickerCalendarProps,
  DatePickerType,
  PeriodDates,
} from './types/DatePickerCalendarProps';
import { getDayjs, today } from '@/utilities/day';
import { CalendarComponentDayText } from '@/core/components/Calendar/DatePickerCalendar/subs/CalendarComponentDayText';
import { CalendarComponentDaySubText } from '@/core/components/Calendar/DatePickerCalendar/subs/CalendarComponentDaySubText';

export interface UseDatePickerCalendarResponse {
  models: {
    periodDates: PeriodDates;
    periodDateArray: string[];
  };
  operations: {
    setCalendarPeriodDates: (periodDates: PeriodDates) => void;
    setPeriodDates: React.Dispatch<React.SetStateAction<PeriodDates>>;
    onDateClick: (
      variants: DatePickerType,
      afterAllDate: boolean,
      calendarDate: CalendarDateDto,
    ) => void;
  };
}

export const useDatePickerCalendar = ({
  isFixStartDate,
}: Pick<
  DatePickerCalendarProps,
  'isFixStartDate'
>): UseDatePickerCalendarResponse => {
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });
  const [periodDateArray, setPeriodDateArray] = useState<string[]>([]);

  const onDateClick = useCallback(
    (
      variants: DatePickerType,
      afterAllDate: boolean,
      calendarDate: CalendarDateDto,
    ) => {
      const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
      const newPeriodDates = periodDates;

      if ((periodDates.startDate && periodDates.endDate) || afterAllDate) {
        if (!isFixStartDate) {
          newPeriodDates.startDate = currentDate;
          newPeriodDates.endDate = '';

          return;
        } else {
          newPeriodDates.startDate = periodDates['startDate'];
          newPeriodDates.endDate = currentDate;

          return;
        }
      }

      if (variants === DATE_PICKER_TYPE['PERIOD'] && periodDates.startDate) {
        if (isFixStartDate) {
          newPeriodDates.endDate = currentDate;

          return;
        } else {
          if (!getDayjs(periodDates.startDate).isAfter(calendarDate.dayjs)) {
            newPeriodDates.endDate = currentDate;
          } else {
            newPeriodDates.startDate = currentDate;
            newPeriodDates.endDate = '';
          }
        }
      } else {
        newPeriodDates.startDate = currentDate;
        newPeriodDates.endDate = '';
      }
    },
    [periodDates],
  );

  const setCalendarPeriodDates = useCallback(
    (periodDates: PeriodDates) => {
      if (!periodDates.endDate || !periodDates.startDate) {
        setPeriodDateArray([]);
        return;
      }
      const newPeriodDateArray: string[] = [];
      const startDate: dayjs.Dayjs = getDayjs(periodDates.startDate);
      const endDate: dayjs.Dayjs = getDayjs(periodDates.endDate);
      const diffDate: number = endDate.diff(startDate, 'day');

      for (let i = 0; i <= diffDate; i++) {
        newPeriodDateArray.push(startDate.add(i, 'day').format('YYYY-MM-DD'));
      }
      setPeriodDateArray(newPeriodDateArray);
    },
    [periodDates, setPeriodDateArray],
  );

  return {
    models: {
      periodDateArray,
      periodDates,
    },
    operations: {
      setCalendarPeriodDates,
      setPeriodDates,
      onDateClick,
    },
  };
};

const DatePickerCalendar = ({
  variants = DATE_PICKER_TYPE['SINGLE'],
  label,
  initialDate,
  exceptionDay,
  periodDates,
  disabledDates,
  cutoffDate,
  cutoffAfterDate,
  afterAllDate = false,
  monthButtonStatus,
  isFixStartDate = false,
  useHoliday = false,
  onRender,
  onDateClick,
}: DatePickerCalendarProps) => {
  const { date: exceptionDate = '', label: exceptionLabel = '' } =
    exceptionDay ?? {};
  const { models: commonModels, operations: commonOperations } = useCalendar(
    initialDate ? getDayjs(initialDate) : today,
  );
  const { models, operations } = useDatePickerCalendar({ isFixStartDate });

  useEffect(() => {
    if (!onRender || commonModels.calendarDates.length <= 0) {
      return;
    }

    const calenderDatesEndWeek =
      commonModels.calendarDates[commonModels.calendarDates.length - 1];
    const calenderDatesEndWeekEndDay =
      calenderDatesEndWeek[calenderDatesEndWeek.length - 1];
    const renderDates: PeriodDates = {
      startDate: commonModels.calendarDates[0][0]?.dayjs.format('YYYY-MM-DD'),
      endDate: calenderDatesEndWeekEndDay?.dayjs.format('YYYY-MM-DD'),
    };

    onRender?.(renderDates);
  }, [commonModels.calendarDates]);

  useEffect(() => {
    if (periodDates.startDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.startDate = periodDates.startDate;
      operations.setPeriodDates({ ...newPeriodDates });
      commonOperations.setInitialSelectedDayjs(getDayjs(periodDates.startDate));
    }
  }, []);

  useEffect(() => {
    if (afterAllDate) {
      const newPeriodDates = models.periodDates;
      newPeriodDates.endDate = '';
      operations.setPeriodDates({ ...newPeriodDates });
      operations.setCalendarPeriodDates({ startDate: '', endDate: '' });
      onDateClick(models.periodDates, true);
    }
  }, [afterAllDate]);

  useEffect(() => {
    operations.setPeriodDates({ ...periodDates });
    operations.setCalendarPeriodDates(periodDates);
  }, [periodDates]);

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

  return (
    <div className={'flex-v-stack h-full w-full'}>
      <CalendarHeader
        currentMonth={commonModels.selectedDayjs}
        onPreviousMonthClick={commonOperations.onPreviousMonthClick}
        onNextMonthClick={commonOperations.onNextMonthClick}
        monthButtonStatus={monthButtonStatus}
      />
      <CalendarWeekDayComponent className='text-gray-06' />
      <div className={clsx('mt-4 grid flex-1')}>
        {commonModels.calendarDates.map((calendarWeekDates, index: number) => {
          return (
            <div key={index} className={'grid grid-cols-7'}>
              {calendarWeekDates.map(
                (calendarDate: CalendarDateDto, index: number) => {
                  const disabled =
                    (!useHoliday && calendarDate.isHoliday) ||
                    !calendarDate.isThisMonth ||
                    disabledDates?.includes(
                      calendarDate.dayjs.format('YYYY-MM-DD'),
                    ) ||
                    isCutoffDateValidation({
                      cutoffDate,
                      cutoffAfterDate,
                      calendarDate: calendarDate.dayjs.format('YYYY-MM-DD'),
                    });
                  const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
                  const isExceptionDate = exceptionDay
                    ? exceptionDate === currentDate
                    : false;

                  return (
                    <div key={index}>
                      <button
                        type='button'
                        className={'h-full w-full'}
                        disabled={disabled}
                        onClick={(): void => {
                          const currentDate =
                            calendarDate.dayjs.format('YYYY-MM-DD');

                          if (currentDate === periodDates.startDate) {
                            return;
                          }
                          operations.onDateClick(
                            variants,
                            afterAllDate,
                            calendarDate,
                          );
                          operations.setCalendarPeriodDates(models.periodDates);
                          onDateClick(models.periodDates, afterAllDate);
                        }}
                      >
                        <div className={clsx('flex flex-col')}>
                          <CalendarComponentDayText
                            disabled={disabled}
                            calendarDate={calendarDate}
                            periodDates={models.periodDates}
                            periodDateArray={models.periodDateArray}
                            afterAllDate={afterAllDate}
                            isExceptionDate={isExceptionDate}
                          />
                          <CalendarComponentDaySubText
                            calendarDate={calendarDate}
                            periodDates={models.periodDates}
                            isExceptionDate={isExceptionDate}
                            exceptionDateLabel={exceptionLabel}
                            label={label}
                          />
                        </div>
                      </button>
                    </div>
                  );
                },
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePickerCalendar;
