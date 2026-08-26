import { MONTH_BUTTON_STATUS } from '../constants';
import { CalendarHeaderProps } from '../types/CalendarHeader';
import Icon from '@/core/components/Icon';
import Typography from '@/core/components/Typography';
import { getDayjs } from '@/utilities/day';

export const CalendarHeader = ({
  currentMonth,
  onPreviousMonthClick,
  onNextMonthClick,
  monthButtonStatus = MONTH_BUTTON_STATUS['IDLE'],
}: CalendarHeaderProps) => {
  const year = getDayjs(currentMonth).format('YYYY.');
  const month = getDayjs(currentMonth).format('MM');
  const isDisabledMonthBtn =
    monthButtonStatus === MONTH_BUTTON_STATUS['DISABLE_BOTH'];
  const isDisablePrev =
    (isDisabledMonthBtn ||
      monthButtonStatus === MONTH_BUTTON_STATUS['DISABLE_PREV']) ??
    false;
  const isDisableNext =
    (isDisabledMonthBtn ||
      monthButtonStatus === MONTH_BUTTON_STATUS['DISABLE_NEXT']) ??
    false;
  const buttonClassNames = 'group flex justify-center items-center';
  const iconClassNames =
    'text-gray-05 group-disabled:text-gray-03 group-disabled:cursor-not-allowed text-subhead-01-regular md:text-head-01-regular';

  return (
    <div className='mb-6 flex items-center justify-center gap-x-5'>
      <button
        className={buttonClassNames}
        disabled={isDisablePrev}
        type='button'
        onClick={() => !isDisablePrev && onPreviousMonthClick?.()}
      >
        <Icon className={iconClassNames} iconKey='caret-left' />
      </button>
      <div className='flex min-w-[6rem] items-center justify-between text-black'>
        <Typography
          className='md:text-head-02-regular text-center'
          text={year}
          theme='subhead-01-medium'
        />
        <Typography
          className='md:text-head-02-regular text-center'
          color='black'
          text={month}
          theme='subhead-01-medium'
        />
      </div>
      <button
        className={buttonClassNames}
        disabled={isDisableNext}
        type='button'
        onClick={() => !isDisableNext && onNextMonthClick?.()}
      >
        <Icon className={iconClassNames} iconKey='caret-right' />
      </button>
    </div>
  );
};
