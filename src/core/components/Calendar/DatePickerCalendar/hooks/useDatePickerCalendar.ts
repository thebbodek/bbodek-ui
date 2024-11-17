import dayjs from 'dayjs';
import { useCallback, useState } from 'react';

import {
  DatePickerCalendarProps,
  DatePickerType,
  PeriodDates,
  UseDatePickerCalendarResponse,
} from '@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import { DATE_PICKER_TYPE } from '@/core/components/Calendar/DatePickerCalendar/constants';
import { getDayjs } from '@/utilities/day';

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

  const handleDateClick = useCallback(
    (
      variants: DatePickerType,
      afterAllDate: boolean,
      calendarDate: CalendarDateDto,
    ) => {
      const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
      const newPeriodDates = periodDates;

      if (variants === DATE_PICKER_TYPE['SINGLE']) {
        newPeriodDates.startDate = currentDate;
        newPeriodDates.endDate = currentDate;

        return;
      }

      if (variants === DATE_PICKER_TYPE['PERIOD']) {
        if (!isFixStartDate) {
          if (afterAllDate) {
            newPeriodDates.startDate = currentDate;
            newPeriodDates.endDate = '';

            return;
          }

          if (periodDates.startDate === '' && periodDates.endDate === '') {
            newPeriodDates.startDate = currentDate;
            newPeriodDates.endDate = currentDate;

            return;
          } else if (
            periodDates.startDate !== '' &&
            periodDates.endDate !== ''
          ) {
            if (periodDates.startDate === periodDates.endDate) {
              if (
                calendarDate.dayjs.isBefore(getDayjs(periodDates.startDate))
              ) {
                newPeriodDates.startDate = currentDate;
                newPeriodDates.endDate = currentDate;

                return;
              }

              newPeriodDates.endDate = currentDate;

              return;
            }
            newPeriodDates.startDate = currentDate;
            newPeriodDates.endDate = currentDate;

            return;
          } else if (
            periodDates.startDate !== '' &&
            periodDates.endDate === ''
          ) {
            if (calendarDate.dayjs.isBefore(getDayjs(periodDates.startDate))) {
              newPeriodDates.startDate = currentDate;

              return;
            }
            newPeriodDates.endDate = currentDate;

            return;
          }
        } else {
          if (afterAllDate) {
            newPeriodDates.startDate = currentDate;
            newPeriodDates.endDate = '';

            return;
          }

          newPeriodDates.endDate = currentDate;
        }
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
      const newPeriodDateArray = [];
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
      handleDateClick,
    },
  };
};
