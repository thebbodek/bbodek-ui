import { useEffect } from 'react';

import { DATE_PICKER_TYPE } from './constants';
import {
  DatePickerCalendarProps,
  PeriodDates,
} from './types/DatePickerCalendarProps';
import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarHeader } from '@/core/components/Calendar/common/subs/CalendarHeader';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import DatePickerCalendarWeek from '@/core/components/Calendar/DatePickerCalendar/DatePickerCalendarWeek';
import { useDatePickerCalendar } from '@/core/components/Calendar/DatePickerCalendar/hooks/useDatePickerCalendar';
import { getDayjs, today } from '@/utilities/day';

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

    const { calendarDates } = commonModels;
    const calenderDatesStartWeekStartDay = calendarDates[0][0];
    const calenderDatesEndWeek = calendarDates[calendarDates.length - 1];
    const calenderDatesEndWeekEndDay =
      calenderDatesEndWeek[calenderDatesEndWeek.length - 1];
    const renderDates: PeriodDates = {
      startDate: calenderDatesStartWeekStartDay?.dayjs.format('YYYY-MM-DD'),
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
    <div className='flex-v-stack h-full w-full'>
      <CalendarHeader
        currentMonth={commonModels.selectedDayjs}
        monthButtonStatus={monthButtonStatus}
        onNextMonthClick={commonOperations.onNextMonthClick}
        onPreviousMonthClick={commonOperations.onPreviousMonthClick}
      />
      <CalendarWeekDayComponent className='text-gray-06 mb-4' />
      <div className='flex-1'>
        {commonModels.calendarDates.map((calendarWeekDates, index) => (
          <DatePickerCalendarWeek
            afterAllDate={afterAllDate}
            calendarWeekDates={calendarWeekDates}
            cutoffAfterDate={cutoffAfterDate}
            cutoffDate={cutoffDate}
            disabledDates={disabledDates}
            exceptionDay={exceptionDay}
            handleDateClick={operations['handleDateClick']}
            key={index}
            label={label}
            periodDateArray={models['periodDateArray']}
            periodDates={models['periodDates']}
            setCalendarPeriodDates={operations['setCalendarPeriodDates']}
            temporaryDates={temporaryDates}
            useHoliday={useHoliday}
            variants={variants}
            onDateClick={onDateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DatePickerCalendar;
