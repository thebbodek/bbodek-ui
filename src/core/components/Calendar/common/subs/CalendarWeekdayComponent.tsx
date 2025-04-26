import clsx from 'clsx';
import 'dayjs/locale/ko';

import { Weekdays } from '@/constants';
import Typography from '@/core/components/Typography';
import { getDayjs } from '@/utilities/day';

export const CalendarWeekDayComponent = ({
  className,
}: {
  className?: string;
}) => {
  const convertWeekdayNumberToString = (weekdayNumber: number) => {
    return getDayjs()
      .startOf('week')
      .add(weekdayNumber, 'day')
      .locale('ko')
      .format('ddd');
  };

  return (
    <div
      className={clsx(
        'grid w-full min-w-full grid-cols-7 items-center justify-center text-center',
        className,
      )}
    >
      {Object.values(Weekdays).map((weekdayNumber) => (
        <Typography
          element='strong'
          key={weekdayNumber}
          text={convertWeekdayNumberToString(weekdayNumber)}
          theme='body-02-regular'
          color='gray-06'
          className='md:text-body-01-regular text-inherit!'
        />
      ))}
    </div>
  );
};
