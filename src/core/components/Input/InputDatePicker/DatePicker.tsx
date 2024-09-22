import { CalendarBlank } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useEffect, useId, useState } from 'react';

import Button from '../../Button/Button';
import DatePickerCalendar from '../../Calendar/DatePickerCalendar';
import { DATE_PICKER_TYPE } from '../../Calendar/DatePickerCalendar/constants';
import { PeriodDates } from '../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import ModalPopUp from '../../Modal/ModalPopUp';
import GeneralTab from '../../Tab/GeneralTab/GeneralTab';
import Typography from '../../Typography';
import { DatePickerProps } from './types';

const DatePicker = ({
  variants = DATE_PICKER_TYPE['PERIOD'],
  cutoffDate,
  cutoffAfterDate,
  isOpen,
  close,
  isFixStartDate = false,
  initialDate,
  disabled,
  disabledDates,
  externalDates,
  useTab = false,
  useHoliday = false,
  closeButtonText = '닫기',
  dateLabel,
  hasDatePickerTitle = true,
  temporaryDates,
}: DatePickerProps) => {
  const id = useId();
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });
  const [tabSelected, setTabSelected] = useState('selectedDate');
  const [isAfterAllDate, setIsAfterAllDate] = useState(false);
  const tabData = [
    { key: 'selectedDate', label: '선택한 기간만 적용' },
    { key: 'afterAllDate', label: '선택일부터 모든 날짜 적용' },
  ];

  const handleClose = () => {
    close(periodDates, isAfterAllDate);
  };

  useEffect(() => {
    externalDates && setPeriodDates(externalDates);
  }, [externalDates]);

  const tabItems = tabData.map((item) => (
    <GeneralTab.Item
      key={item.key}
      label={item.label}
      name={id}
      theme='body-01-bold'
      checked={item.key === tabSelected}
      value={item.key}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setTabSelected(e.target.value);
      }}
    />
  ));

  const onDateClick = (periodDates: PeriodDates, afterAllDate?: boolean) => {
    setPeriodDates(
      !isFixStartDate
        ? periodDates!
        : {
            startDate: externalDates!['startDate'],
            endDate: periodDates['endDate'],
          },
    );
    setIsAfterAllDate(afterAllDate !== undefined && afterAllDate);
  };

  return (
    <ModalPopUp isOpen={isOpen}>
      <div
        className={clsx(
          'w-[calc(100vw-1rem)] min-w-[20rem] max-w-[26rem] rounded-xl bg-white',
          { 'max-w-[35rem]': useTab },
        )}
      >
        <header className='p-4'>
          {hasDatePickerTitle && (
            <div className='flex items-center gap-2'>
              <CalendarBlank className='text-subhead-02-medium md:text-subhead-01-medium' />
              <Typography
                element='h6'
                text='날짜 선택'
                theme='body-01-medium'
                className='md:text-subhead-02-medium'
              />
            </div>
          )}
          {useTab && (
            <GeneralTab
              items={tabItems}
              className='mt-3 !rounded-xl !p-1.5 md:mt-4 md:p-2 [&_li]:rounded-lg [&_span]:p-1.5 [&_span]:text-body-02-bold md:[&_span]:p-2 md:[&_span]:text-body-01-bold'
            />
          )}
        </header>
        <div
          className={clsx(
            'overflow-y-auto px-4',
            useTab ? 'max-h-[calc(100vh-13rem)]' : 'max-h-[calc(100vh-10rem)]',
          )}
        >
          <DatePickerCalendar
            temporaryDates={temporaryDates}
            isFixStartDate={isFixStartDate}
            variants={variants}
            cutoffDate={cutoffDate}
            cutoffAfterDate={cutoffAfterDate}
            periodDates={periodDates}
            disabledDates={disabledDates}
            initialDate={initialDate}
            onDateClick={onDateClick}
            disabled={disabled}
            useHoliday={useHoliday}
            afterAllDate={tabSelected === 'afterAllDate'}
            label={dateLabel}
          />
        </div>
        <div className='border-t p-3 md:p-4'>
          <Button
            content={closeButtonText}
            size='h-52'
            colorTheme='white'
            className='w-full'
            onClick={handleClose}
          />
        </div>
      </div>
    </ModalPopUp>
  );
};

export default DatePicker;
