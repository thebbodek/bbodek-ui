import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import Typography from '@/core/components/Typography';
import { DatePickerCalendarProps } from '../types/DatePickerCalendarProps';

interface CalendarComponentDaySubTextProps
  extends Pick<DatePickerCalendarProps, 'label' | 'periodDates'> {
  calendarDate: CalendarDateDto;
  isExceptionDate: boolean;
  exceptionDateLabel?: string;
}

export const CalendarComponentDaySubText = ({
  calendarDate,
  periodDates,
  isExceptionDate,
  exceptionDateLabel,
  label,
}: CalendarComponentDaySubTextProps) => {
  const currentDate = calendarDate.dayjs.format('YYYY-MM-DD');
  const isPeriod = periodDates.startDate && periodDates.endDate;
  const isStartDate = isPeriod && periodDates.startDate === currentDate;
  const isEndDate = isPeriod && periodDates.endDate === currentDate;
  const singleSelectedDate =
    periodDates.startDate &&
    !periodDates.endDate &&
    currentDate === periodDates.startDate;
  const isActiveDate = isStartDate || isEndDate || singleSelectedDate;

  const dayLabel = () => {
    if (isExceptionDate) return exceptionDateLabel;

    const hasCustomStartLabel = label && label[0];
    const hasCustomEndLabel = label && label[1];
    const startLabel = hasCustomStartLabel ? label[0] : '시작일';
    const endLabel = hasCustomEndLabel ? label[1] : '종료일';

    if (isStartDate || singleSelectedDate) return startLabel;

    if (isEndDate) return endLabel;

    if (calendarDate.isToday) {
      const todayLabel = isEndDate ? endLabel : '오늘';
      return todayLabel;
    }

    return '';
  };

  return (
    <Typography
      text={dayLabel()}
      theme='body-03-regular'
      className='z-10 mt-0.5 h-[1.5rem] whitespace-nowrap md:text-body-02-regular'
      color={isActiveDate ? 'primary-03' : 'gray-06'}
    />
  );
};
