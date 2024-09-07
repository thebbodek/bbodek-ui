import { useEffect } from 'react';

import { CalendarDayComponent } from '@/core/components/Calendar/ScheduleCalendar/subs/CalendarDayComponent';
import { CalendarComponentProps } from '@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps';
import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarHeader } from '@/core/components/Calendar/common/subs/CalendarHeader';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import { PeriodDates } from '../DatePickerCalendar/types/DatePickerCalendarProps';
import { getDayjs, today } from '@/utilities/day';

const ScheduleCalendar = ({
  initialDate,
  defaultQuantity,
  schedulesData,
  onDateClick,
  onRender,
  monthButtonStatus,
}: CalendarComponentProps) => {
  const { models, operations } = useCalendar(
    initialDate ? getDayjs(initialDate * 1000) : today,
  );

  useEffect(() => {
    if (models.calendarDates.length <= 0) {
      return;
    }

    const calenderDatesEndWeek =
      models.calendarDates[models.calendarDates.length - 1];
    const calenderDatesEndWeekEndDay =
      calenderDatesEndWeek[calenderDatesEndWeek.length - 1];
    const renderDates: PeriodDates = {
      startDate: models.calendarDates[0][0]?.dayjs.format('YYYY-MM-DD'),
      endDate: calenderDatesEndWeekEndDay?.dayjs.format('YYYY-MM-DD'),
    };

    onRender?.(renderDates);
  }, [models.calendarDates]);

  return (
    <div className={'flex h-full w-full flex-col'}>
      <CalendarHeader
        currentMonth={models.selectedDayjs}
        onPreviousMonthClick={operations.onPreviousMonthClick}
        onNextMonthClick={operations.onNextMonthClick}
        monthButtonStatus={monthButtonStatus}
      />
      <CalendarWeekDayComponent className='gap-x-[1px] border border-b-0 border-gray-03 bg-gray-03 py-1 text-gray-07' />
      <div className='flex-v-stack gap-y-[1px] border border-t-0 border-gray-03 bg-gray-03'>
        <CalendarDayComponent
          defaultQuantity={defaultQuantity}
          schedulesData={schedulesData}
          calendarDates={models.calendarDates}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};

export default ScheduleCalendar;
