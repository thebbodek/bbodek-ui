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
import Icon from '@/core/components/Icon';

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
  afterAllDate,
}: DatePickerProps) => {
  const id = useId();
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });
  const [tabSelected, setTabSelected] = useState(
    afterAllDate ? 'afterAllDate' : 'selectedDate',
  );
  const tabData = [
    { key: 'selectedDate', label: '선택한 기간만 적용' },
    { key: 'afterAllDate', label: '선택일부터 모든 날짜 적용' },
  ];

  const handleClose = () => {
    close(periodDates, tabSelected === 'afterAllDate');
  };

  useEffect(() => {
    if (externalDates) {
      setPeriodDates(externalDates);
    }
  }, [externalDates]);

  const tabItems = tabData.map((item) => (
    <GeneralTab.Item
      checked={item.key === tabSelected}
      key={item.key}
      label={item.label}
      name={id}
      theme='body-01-bold'
      value={item.key}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setTabSelected(e.target.value);
      }}
    />
  ));

  const onDateClick = (periodDates: PeriodDates) => {
    setPeriodDates(
      !isFixStartDate
        ? periodDates!
        : {
            startDate: externalDates!['startDate'],
            endDate: periodDates['endDate'],
          },
    );
  };

  return (
    <ModalPopUp isOpen={isOpen}>
      <div
        className={clsx(
          'w-[calc(100vw-1rem)] max-w-[26rem] min-w-[20rem] rounded-xl bg-white',
          { 'max-w-[35rem]': useTab },
        )}
      >
        <header className='p-4'>
          {hasDatePickerTitle && (
            <div className='flex items-center gap-2'>
              <Icon
                className='text-subhead-02-medium md:text-subhead-01-medium'
                iconKey='calendar-blank'
              />
              <Typography
                className='md:text-subhead-02-medium'
                element='h6'
                text='날짜 선택'
                theme='body-01-medium'
              />
            </div>
          )}
          {useTab && (
            <GeneralTab
              className='[&_span]:text-body-02-bold md:[&_span]:text-body-01-bold mt-3 rounded-xl! p-1.5! md:mt-4 md:p-2 [&_span]:rounded-lg! [&_span]:p-1.5 md:[&_span]:p-2'
              items={tabItems}
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
            afterAllDate={tabSelected === 'afterAllDate'}
            cutoffAfterDate={cutoffAfterDate}
            cutoffDate={cutoffDate}
            disabled={disabled}
            disabledDates={disabledDates}
            initialDate={initialDate}
            isFixStartDate={isFixStartDate}
            label={dateLabel}
            periodDates={periodDates}
            temporaryDates={temporaryDates}
            useHoliday={useHoliday}
            variants={variants}
            onDateClick={onDateClick}
          />
        </div>
        <div className='border-t p-3 md:p-4'>
          <Button
            className='w-full'
            colorTheme='white'
            content={closeButtonText}
            size='h-52'
            onClick={handleClose}
          />
        </div>
      </div>
    </ModalPopUp>
  );
};

export default DatePicker;
