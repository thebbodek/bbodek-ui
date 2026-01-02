import { Meta } from '@storybook/react';
import { useState } from 'react';

import { DATE_PICKER_TYPE } from './constants';
import { PeriodDates } from './types/DatePickerCalendarProps';
import DatePickerCalendar from '@/core/components/Calendar/DatePickerCalendar';

const meta = {
  title: 'core/Calendar/DatePickerCalendar',
  component: DatePickerCalendar,
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;

export const SingleDatePicker = () => {
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });

  const onDateClick = (date: PeriodDates) => {
    setPeriodDates(date);
  };

  return (
    <div className={'w-[500px] rounded-3xl border py-6'}>
      <DatePickerCalendar
        cutoffDate='2023-12-08'
        variants={DATE_PICKER_TYPE['SINGLE']}
        label={['해지 신청일']}
        initialDate='2024-02-05'
        periodDates={periodDates}
        onDateClick={onDateClick}
        temporaryDates={['2024-10-01']}
      />
    </div>
  );
};

export const PeriodDatesPicker = () => {
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '2024-01-24',
    endDate: '2024-01-26',
  });

  const onDateClick = (date: PeriodDates) => {
    setPeriodDates(date!);
  };

  return (
    <div className={'w-[500px] rounded-3xl border py-6'}>
      <DatePickerCalendar
        label={['사용일', '종료일']}
        variants={DATE_PICKER_TYPE['PERIOD']}
        cutoffDate='2024-01-23'
        periodDates={periodDates}
        temporaryDates={['2024-10-01']}
        onDateClick={onDateClick}
      />
    </div>
  );
};
