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
        temporaryDates={temporaryDates}
        hasDatePickerTitle={hasDatePickerTitle}
        isFixStartDate={isFixStartDate}
        variants={variants}
        disabled={isDisabled}
        isOpen={isOpen}
        close={(periodDates: PeriodDates, isAfterAllDate?: boolean) => {
          getPeriodDates(periodDates, isAfterAllDate);
          close(periodDates);
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
        'relative cursor-pointer',
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
      badge={badge}
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
      endComponent={
        <Icon
          iconKey={'calendar-blank'}
          className={'text-gray-05 text-[120%]'}
        />
      }
    />
  );
};

export default InputDatePicker;
