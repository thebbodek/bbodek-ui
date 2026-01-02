import clsx from 'clsx';

import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';
import { CalendarComponentProps } from '@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps';
import Typography from '@/core/components/Typography';

interface CalendarDayComponentProps extends Omit<
  CalendarComponentProps,
  'onRender'
> {
  calendarDates: CalendarDateDto[][];
}

export const CalendarDayComponent = ({
  defaultQuantity,
  schedulesData,
  calendarDates,
  onDateClick,
}: CalendarDayComponentProps) => {
  return (
    <>
      {calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key={index}
          className={'grid h-36 grid-cols-7 gap-[1px] overflow-hidden'}
        >
          {calendarWeekDates.map(
            (calendarDate: CalendarDateDto, index: number) => {
              const currentDate: string =
                calendarDate.dayjs.format('YYYY-MM-DD');
              const currentSchedule =
                schedulesData &&
                Object.keys(schedulesData).find((date) => date === currentDate);
              let quantity = defaultQuantity;

              if (currentSchedule && schedulesData![currentSchedule].quantity) {
                quantity = schedulesData![currentSchedule].quantity;
              }

              return (
                <button
                  key={index}
                  type='button'
                  disabled={!calendarDate.isThisMonth}
                  className='flex-v-stack h-full items-center bg-white text-center'
                  onClick={(): void => onDateClick(currentDate)}
                >
                  <div
                    className={clsx(
                      'relative my-1 flex h-[1.5rem] items-center justify-center',
                      {
                        'bg-gray-01 w-[1.5rem] rounded-full':
                          calendarDate.isToday,
                        'text-gray-03': !calendarDate.isThisMonth,
                      },
                    )}
                  >
                    <Typography
                      text={`${calendarDate.dayjs.date()}`}
                      theme='body-02-bold'
                      className='text-inherit'
                    />
                    {quantity !== undefined && (
                      <Typography
                        key={index}
                        text={`(${quantity})`}
                        theme='body-02-bold'
                        className='absolute top-1/2 translate-x-[calc(100%+0.25rem)] -translate-y-1/2'
                        color={`${
                          !calendarDate.isThisMonth
                            ? 'gray-03'
                            : quantity === defaultQuantity
                              ? 'gray-06'
                              : 'primary-03'
                        }`}
                      />
                    )}
                  </div>
                  {schedulesData &&
                    Object.keys(schedulesData).map(
                      (markedDate) =>
                        markedDate ===
                          calendarDate.dayjs.format('YYYY-MM-DD') && (
                          <div
                            className='flex-v-stack w-full gap-1'
                            key={markedDate}
                          >
                            {schedulesData[markedDate].markedDates
                              ?.slice(0, 3)
                              .map((markedDateValue, index) => (
                                <div
                                  key={index}
                                  className={`${
                                    !calendarDate.isThisMonth
                                      ? 'bg-gray-00 text-primary-00'
                                      : 'bg-primary-00 text-primary-02'
                                  }`}
                                >
                                  &nbsp;
                                  <Typography
                                    theme='body-02-bold'
                                    text={
                                      markedDateValue === undefined
                                        ? ''
                                        : markedDateValue
                                    }
                                    className='text-inherit'
                                  />
                                  &nbsp;
                                </div>
                              ))}
                            {(schedulesData[markedDate].markedDates?.length ??
                              0) > 3 && (
                              <div className='px-2 text-left'>
                                <Typography
                                  element='p'
                                  theme='body-03-bold'
                                  text={`${
                                    schedulesData[
                                      markedDate
                                    ].markedDates?.slice(
                                      3,
                                      schedulesData[markedDate].markedDates
                                        ?.length ?? 0,
                                    ).length
                                  }개 더보기`}
                                  color='gray-06'
                                />
                              </div>
                            )}
                          </div>
                        ),
                    )}
                </button>
              );
            },
          )}
        </div>
      ))}
    </>
  );
};
