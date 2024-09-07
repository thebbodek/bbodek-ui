import dayjs from 'dayjs';
import { useEffect } from 'react';

import { HOLIDAYS, Weekdays } from '@/constants';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import { getDayjs } from '@/utilities/day';

export const useMonthChangeEffect = (
  selectedDayjs: dayjs.Dayjs,
  setCalendarDates: React.Dispatch<React.SetStateAction<CalendarDateDto[][]>>,
) => {
  useEffect(() => {
    function getNewCalendarDates() {
      const newCalendarDates: CalendarDateDto[][] = [];
      let calendarWeekDates: CalendarDateDto[] = [];

      let calendarDate: dayjs.Dayjs =
        selectedDayjs.startOf('month').startOf('week').get('d') ===
        Weekdays.SUNDAY
          ? selectedDayjs.startOf('month').startOf('week')
          : selectedDayjs.subtract(1, 'month').endOf('month').startOf('week');

      const totalWeeks = 6;
      const endCalendarDate = calendarDate.add(totalWeeks * 7, 'day');

      while (calendarDate.isBefore(endCalendarDate)) {
        calendarWeekDates.push({
          dayjs: calendarDate,
          isThisMonth: calendarDate.isSame(selectedDayjs, 'month'),
          isToday:
            calendarDate.format('YYYY-MM-DD') ===
            getDayjs().format('YYYY-MM-DD'),
          isHoliday: HOLIDAYS.includes(calendarDate.get('d')),
        });

        if (calendarWeekDates.length === 7) {
          newCalendarDates.push(calendarWeekDates);
          calendarWeekDates = [];
        }

        calendarDate = calendarDate.add(1, 'day');
      }

      return newCalendarDates;
    }

    const newCalendarDates: CalendarDateDto[][] = getNewCalendarDates();

    setCalendarDates(newCalendarDates);
  }, [selectedDayjs]);
};
