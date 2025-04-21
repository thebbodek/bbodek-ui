import { useEffect } from 'react';

import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarHeader } from '@/core/components/Calendar/common/subs/CalendarHeader';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import { DATE_PICKER_TYPE } from './constants';
import {
  DatePickerCalendarProps,
  PeriodDates,
} from './types/DatePickerCalendarProps';
import { getDayjs, today } from '@/utilities/day';
import { useDatePickerCalendar } from '@/core/components/Calendar/DatePickerCalendar/hooks/useDatePickerCalendar';
import DatePickerCalendarWeek from '@/core/components/Calendar/DatePickerCalendar/DatePickerCalendarWeek';

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
  temporaryDates,
  useHoliday = false,
  onRender,
  onDateClick,
}: DatePickerCalendarProps) => {
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
    }
  }, [afterAllDate]);

  useEffect(() => {
    operations.setPeriodDates({ ...periodDates });
    operations.setCalendarPeriodDates(periodDates);
  }, [periodDates]);

  return (
    <div className={'flex-v-stack h-full w-full'}>
      <CalendarHeader
        currentMonth={commonModels.selectedDayjs}
        onPreviousMonthClick={commonOperations.onPreviousMonthClick}
        onNextMonthClick={commonOperations.onNextMonthClick}
        monthButtonStatus={monthButtonStatus}
      />
      <CalendarWeekDayComponent className='text-gray-06 mb-4' />
      <div className={'flex-1'}>
        {commonModels.calendarDates.map((calendarWeekDates, index) => (
          <DatePickerCalendarWeek
            key={index}
            calendarWeekDates={calendarWeekDates}
            exceptionDay={exceptionDay}
            useHoliday={useHoliday}
            cutoffDate={cutoffDate}
            cutoffAfterDate={cutoffAfterDate}
            disabledDates={disabledDates}
            temporaryDates={temporaryDates}
            handleDateClick={operations['handleDateClick']}
            afterAllDate={afterAllDate}
            label={label}
            variants={variants}
            periodDates={models['periodDates']}
            setCalendarPeriodDates={operations['setCalendarPeriodDates']}
            onDateClick={onDateClick}
            periodDateArray={models['periodDateArray']}
          />
        ))}
      </div>
    </div>
  );
};

export default DatePickerCalendar;
