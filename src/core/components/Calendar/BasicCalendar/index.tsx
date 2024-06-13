import clsx from 'clsx';
import 'dayjs/locale/ko';

import { useCalendar } from '@/core/components/Calendar/common/hooks/useCalendar';
import { CalendarWeekDayComponent } from '@/core/components/Calendar/common/subs/CalendarWeekdayComponent';
import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import Typography from '@/core/components/Typography';
import { BasicCalendarProps } from './types';

const BasicCalendar = ({ dottedDates }: BasicCalendarProps) => {
  const { models: commonModels } = useCalendar();

  return (
    <div className={'flex h-full w-full flex-col'}>
      <Typography
        text={commonModels.selectedDayjs.locale('ko').format('MM월 D일 (ddd)')}
        className='mb-4'
      />
      <CalendarWeekDayComponent />

      <div className='flex-v-stack h-full'>
        {commonModels.calendarDates.map(
          (calendarWeekDates: CalendarDateDto[], index) => (
            <div key={index} className={clsx('grid flex-1 grid-cols-7')}>
              {calendarWeekDates.map(
                (calendarDate: CalendarDateDto, index: number) => (
                  <div key={index} className={'flex flex-col'}>
                    <div className='relative flex flex-col items-center justify-start'>
                      <div
                        className={clsx(
                          'relative flex h-8 items-center justify-center leading-none',
                          {
                            "before:absolute before:-start-1 before:top-0 before:block before:h-[3px] before:w-[3px] before:rounded-full before:bg-primary-03 before:content-['']":
                              dottedDates &&
                              dottedDates.includes(
                                calendarDate.dayjs.format('YYYY-MM-DD'),
                              ),
                            'w-8 rounded-full bg-gray-03': calendarDate.isToday,
                            'text-gray-03': !calendarDate.isThisMonth,
                          },
                        )}
                      >
                        <Typography
                          text={`${calendarDate.dayjs.date()}`}
                          theme='body-02-regular'
                          className='text-inherit'
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
