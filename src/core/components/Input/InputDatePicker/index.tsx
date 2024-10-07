import { CalendarBlank } from '@phosphor-icons/react';
import clsx from 'clsx';
import { HTMLAttributes, useEffect, useId, useState } from 'react';

import { DATE_PICKER_TYPE } from '../../Calendar/DatePickerCalendar/constants';
import { PeriodDates } from '../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import InputBase from '../InputBase';
import DatePicker from './DatePicker';
import { InputDatePickerProps } from './types';
import { getDayjs } from '@/utilities/day';

const InputDatePicker = ({
  variants = DATE_PICKER_TYPE['PERIOD'],
  cutoffDate,
  cutoffAfterDate,
  overlay,
  disabledDates,
  initialDate,
  isFixStartDate,
  getPeriodDates,
  externalDates,
  error = false,
  useTab = false,
  useHoliday = false,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  inputClassName,
  afterAllDate,
  label,
  dateLabel,
  closeButtonText,
  placeholder,
  feedback,
  feedbackColor,
  hasDatePickerTitle,
  sub,
  temporaryDates,
}: InputDatePickerProps &
  Omit<HTMLAttributes<HTMLInputElement>, 'disabled' | 'readOnly'>) => {
  const id = useId();
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });
  const startDate = getDayjs(periodDates.startDate).format('YYYY. MM. DD');
  const endDate = getDayjs(periodDates.endDate).format('YYYY. MM. DD');
  const isDisabled = readOnly || disabled;

  const onDatePickerClick = (): Promise<PeriodDates> => {
    return new Promise((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <DatePicker
          temporaryDates={temporaryDates}
          hasDatePickerTitle={hasDatePickerTitle}
          isFixStartDate={isFixStartDate}
          variants={variants}
          disabled={isDisabled}
          isOpen={isOpen}
          close={(periodDates: PeriodDates, isAfterAllDate?: boolean) => {
            resolve(periodDates);
            getPeriodDates(periodDates, isAfterAllDate);
            close();
          }}
          dateLabel={dateLabel}
          initialDate={initialDate}
          cutoffDate={cutoffDate}
          cutoffAfterDate={cutoffAfterDate}
          externalDates={periodDates}
          useTab={useTab}
          useHoliday={useHoliday}
          disabledDates={disabledDates}
          closeButtonText={closeButtonText}
          afterAllDate={afterAllDate}
        />
      ));
    });
  };

  const handleDatePicker = async () => {
    if (isDisabled) return;

    const periodDates = await onDatePickerClick();
    setPeriodDates(periodDates);
  };

  const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.target.value
      ? e.target.setCustomValidity('')
      : e.target.setCustomValidity('날짜를 선택해주세요');
  };

  useEffect(() => {
    externalDates && setPeriodDates(externalDates);
  }, [externalDates]);

  return (
    <InputBase
      inputId={id}
      inputRootClassName={clsx(
        'relative h-[3.75rem] cursor-pointer',
        {
          'cursor-not-allowed': isDisabled,
        },
        className,
      )}
      onClick={handleDatePicker}
      label={label}
      required={required}
      error={error}
      feedback={feedback}
      feedbackColor={feedbackColor}
      disabled={disabled}
      readOnly={readOnly}
      sub={sub}
      inputComponent={
        <input
          type='text'
          placeholder={placeholder || '날짜를 입력해주세요'}
          className={clsx('bbodek-field pointer-events-none', inputClassName)}
          value={
            periodDates.startDate &&
            (!afterAllDate
              ? `${startDate}${periodDates.endDate && ` - ${endDate}`}`
              : `${startDate} ~`)
          }
          onKeyDown={() => false}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()}
          onChange={() => {}}
          onInvalid={handleOnInvalid}
          disabled={disabled}
          readOnly={readOnly}
          aria-disabled={disabled}
          aria-readonly={readOnly}
          required={required}
        />
      }
      endComponent={<CalendarBlank size={24} className='text-gray-05' />}
    />
  );
};

export default InputDatePicker;
