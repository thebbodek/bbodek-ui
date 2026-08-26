import { Meta } from '@storybook/react';
import { overlay, OverlayProvider } from 'overlay-kit';
import { useState } from 'react';

import Button from '../../Button/Button';
import { PeriodDates } from '../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import ModalPopUp from '../../Modal/ModalPopUp';
import InputDatePicker from './index';

const meta = {
  title: 'core/Input/InputDatePicker',
  parameters: {
    layout: 'fullscreen',
  },
  component: InputDatePicker,
} satisfies Meta<typeof InputDatePicker>;

export default meta;

const DefaultLayout = () => {
  const [myDates, setMyDates] = useState<{
    startDate: string;
    endDate: string | null;
  }>({
    startDate: '2024-10-04',
    endDate: null,
  });
  const getDate = (periodDates: PeriodDates, isAfterAllDate?: boolean) => {
    setMyDates({
      startDate: periodDates.startDate,
      endDate: isAfterAllDate ? null : periodDates.endDate,
    });
    console.log(periodDates, isAfterAllDate);
  };

  const onDatesClick = () =>
    setMyDates({ startDate: '22222', endDate: '1111' });

  return (
    <form
      className='flex gap-2 p-4'
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('전송');
      }}
    >
      <div className='w-[500px]'>
        <button type='button' onClick={onDatesClick}>
          전체 날짜 변경
        </button>
        <InputDatePicker
          externalDates={{
            startDate: myDates.startDate,
            endDate: myDates.endDate || '',
          }}
          afterAllDate={myDates.endDate === null}
          dateLabel={['복구일']}
          getPeriodDates={getDate}
          initialDate='2024-02-05'
          label='날짜 선택'
          variants='single'
          required
          useTab
        />
        <Button
          backgroundColor='primary-03'
          className='mt-4 px-7'
          color='white'
          content='전송'
          size='h-48'
          type='submit'
        />
      </div>
    </form>
  );
};

export const Default = () => {
  return (
    <OverlayProvider>
      <div id='portal' />
      <DefaultLayout />
    </OverlayProvider>
  );
};

const InputDatePickerInModalPopUpLayout = () => {
  const getDate = (periodDates: PeriodDates) => console.log(periodDates);

  const onOverlay = () => {
    overlay.open(({ isOpen }) => {
      return (
        <ModalPopUp isOpen={isOpen}>
          <InputDatePicker
            dateLabel={['사용일', '종료일']}
            getPeriodDates={getDate}
            useTab={false}
          />
        </ModalPopUp>
      );
    });
  };

  return <button onClick={onOverlay}>클릭</button>;
};

export const InputDatePickerInModalPopUp = () => {
  return (
    <OverlayProvider>
      <div id='portal' />
      <InputDatePickerInModalPopUpLayout />
    </OverlayProvider>
  );
};
