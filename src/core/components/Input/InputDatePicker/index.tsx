import clsx from 'clsx';
import { overlay } from 'overlay-kit';
import { useEffect, useId, useState } from 'react';

import { DATE_PICKER_TYPE } from '../../Calendar/DatePickerCalendar/constants';
import { PeriodDates } from '../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps';
import InputBase from '../InputBase';
import DatePicker from './DatePicker';
import { InputDatePickerProps } from './types';
import Icon from '@/core/components/Icon';
import { getDayjs } from '@/utilities/day';

const InputDatePicker = ({
  variants = DATE_PICKER_TYPE['PERIOD'],
  cutoffDate,
  cutoffAfterDate,
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
  badge,
  label,
  dateLabel,
  closeButtonText,
  placeholder,
  feedback,
  feedbackColor,
  hasDatePickerTitle,
  sub,
  temporaryDates,
}: InputDatePickerProps) => {
  const id = useId();
  const [periodDates, setPeriodDates] = useState<PeriodDates>({
    startDate: '',
    endDate: '',
  });
  const startDate = getDayjs(periodDates.startDate).format('YYYY. MM. DD');
  const endDate = getDayjs(periodDates.endDate).format('YYYY. MM. DD');
  const isDisabled = readOnly || disabled;

  const onDatePickerClick = (): Promise<PeriodDates> => {
    return overlay.openAsync(({ isOpen, close }) => (
      <DatePicker
        close={(periodDates: PeriodDates, isAfterAllDate?: boolean) => {
          getPeriodDates(periodDates, isAfterAllDate);
          close(periodDates);
        }}
        afterAllDate={afterAllDate}
        closeButtonText={closeButtonText}
        cutoffAfterDate={cutoffAfterDate}
        cutoffDate={cutoffDate}
        dateLabel={dateLabel}
        disabled={isDisabled}
        disabledDates={disabledDates}
        externalDates={periodDates}
        hasDatePickerTitle={hasDatePickerTitle}
        initialDate={initialDate}
        isFixStartDate={isFixStartDate}
        isOpen={isOpen}
        temporaryDates={temporaryDates}
        useHoliday={useHoliday}
        useTab={useTab}
        variants={variants}
      />
    ));
  };

  const handleDatePicker = async () => {
    if (isDisabled) return;

    const periodDates = await onDatePickerClick();
    setPeriodDates(periodDates);
  };

  const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.target.setCustomValidity(e.target.value ? '' : '날짜를 선택해주세요');
  };

  useEffect(() => {
    if (externalDates) {
      setPeriodDates(externalDates);
    }
  }, [externalDates]);

  return (
    <InputBase
      endComponent={
        <Icon className='text-gray-05 text-[120%]' iconKey='calendar-blank' />
      }
      inputComponent={
        <input
          value={
            periodDates.startDate &&
            (!afterAllDate
              ? `${startDate}${periodDates.endDate && ` - ${endDate}`}`
              : `${startDate} ~`)
          }
          aria-disabled={disabled}
          aria-readonly={readOnly}
          className={clsx('bbodek-field pointer-events-none', inputClassName)}
          disabled={disabled}
          placeholder={placeholder || '날짜를 입력해주세요'}
          readOnly={readOnly}
          required={required}
          type='text'
          onChange={() => {}}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()}
          onInvalid={handleOnInvalid}
          onKeyDown={() => false}
        />
      }
      inputRootClassName={clsx(
        'relative cursor-pointer',
        {
          'cursor-not-allowed': isDisabled,
        },
        className,
      )}
      badge={badge}
      disabled={disabled}
      error={error}
      feedback={feedback}
      feedbackColor={feedbackColor}
      inputId={id}
      label={label}
      readOnly={readOnly}
      required={required}
      sub={sub}
      onClick={handleDatePicker}
    />
  );
};

export default InputDatePicker;
