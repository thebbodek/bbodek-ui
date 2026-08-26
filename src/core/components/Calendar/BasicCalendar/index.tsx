import clsx from 'clsx';
import 'dayjs/locale/ko';

import { BasicCalendarProps } from './types';
import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import Typography from '@/core/components/Typography';

const BasicCalendar = ({ dottedDates }: BasicCalendarProps) => {
  const { models: commonModels } = useCalendar();

  return (
    <div className='flex h-full w-full flex-col'>
      <Typography
        className='mb-4'
        text={commonModels.selectedDayjs.locale('ko').format('MM월 D일 (ddd)')}
      />
      <CalendarWeekDayComponent />

      <div className='flex-v-stack h-full'>
        {commonModels.calendarDates.map(
          (calendarWeekDates: CalendarDateDto[], index) => (
            <div className={clsx('grid flex-1 grid-cols-7')} key={index}>
              {calendarWeekDates.map(
                (calendarDate: CalendarDateDto, index: number) => (
                  <div className='flex flex-col' key={index}>
                    <div className='relative flex flex-col items-center justify-start'>
                      <div
                        className={clsx(
                          'relative flex h-8 items-center justify-center leading-none',
                          {
                            "before:bg-primary-03 before:absolute before:-start-1 before:top-0 before:block before:h-[3px] before:w-[3px] before:rounded-full before:content-['']":
                              dottedDates &&
                              dottedDates.includes(
                                calendarDate.dayjs.format('YYYY-MM-DD'),
                              ),
                            'bg-gray-03 w-8 rounded-full': calendarDate.isToday,
                            'text-gray-03': !calendarDate.isThisMonth,
                          },
                        )}
                      >
                        <Typography
                          className='text-inherit'
                          text={`${calendarDate.dayjs.date()}`}
                          theme='body-02-regular'
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default BasicCalendar;
