import { DatePickerCalendarProps } from '../types/DatePickerCalendarProps';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import Typography from '@/core/components/Typography';

interface CalendarComponentDaySubTextProps extends Pick<
  DatePickerCalendarProps,
  'label' | 'periodDates'
> {
  calendarDate: CalendarDateDto;
  isExceptionDate: boolean;
  exceptionDateLabel?: string;
  isTemporaryDate: boolean;
  disabled: boolean;
}

export const CalendarComponentDaySubText = ({
  calendarDate,
  periodDates,
  isExceptionDate,
  exceptionDateLabel,
  isTemporaryDate,
  disabled,
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
    const startLabel = hasCustomStartLabel && label[0];
    const endLabel = hasCustomEndLabel && label[1];

    if (isStartDate || singleSelectedDate) return startLabel;

    if (isEndDate) return endLabel;

    if (!disabled && isTemporaryDate) return '임시공휴일';

    if (calendarDate.isToday) {
      const todayLabel = isEndDate ? endLabel : '오늘';

      return todayLabel;
    }

    return '';
  };

  const getLabelColor = () => {
    if (isActiveDate) {
      return 'primary-03';
    }

    if (isTemporaryDate) {
      return 'error';
    }

    return 'gray-06';
  };

  return (
    <Typography
      text={dayLabel()}
      theme='body-03-regular'
      className='md:text-body-02-regular flex h-[1.5rem] items-center justify-center whitespace-nowrap'
      color={getLabelColor()}
    />
  );
};
