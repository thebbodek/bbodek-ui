import { CalendarBlank } from "@phosphor-icons/react";
import clsx from "clsx";
import dayjs from "dayjs";
import { HTMLAttributes, useEffect, useId, useState } from "react";

import { PeriodDates } from "../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps";
import InputBase from "../InputBase";
import DatePicker from "./DatePicker";
import { InputDatePickerProps } from "./types";

const InputDatePicker = ({
  variants = "period",
  cutoffDate,
  cutoffAfterDate,
  overlay,
  disabledDates,
  initialDate,
  getPeriodDates,
  externalDates,
  useTab = false,
  disabled = false,
  required = false,
  className,
  inputClassName,
  afterAllDate,
  label,
  dateLabel,
  closeButtonText,
}: InputDatePickerProps & HTMLAttributes<HTMLInputElement>) => {
  const id = useId();
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });
  const startDate = dayjs(periodDates.startDate).format("YYYY. MM. DD");
  const endDate = dayjs(periodDates.endDate).format("YYYY. MM. DD");

  const onDatePickerClick = (): Promise<PeriodDates> => {
    return new Promise(resolve => {
      overlay.open(({ isOpen, close }) => (
        <DatePicker
          variants = {variants}
          disabled = {disabled}
          isOpen = {isOpen}
          close = {(periodDates: PeriodDates, isAfterAllDate?: boolean) => {
            resolve(periodDates);
            getPeriodDates(periodDates, isAfterAllDate);
            close();
          }}
          dateLabel = {dateLabel}
          initialDate = {initialDate}
          cutoffDate = {cutoffDate}
          cutoffAfterDate = {cutoffAfterDate}
          externalDates = {periodDates}
          useTab = {useTab}
          disabledDates = {disabledDates}
          closeButtonText = {closeButtonText}
        />
      ));
    });
  };

  const handleDatePicker = async () => {
    const periodDates = await onDatePickerClick();
    setPeriodDates(periodDates);
  };

  const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.target.value ? e.target.setCustomValidity("") : e.target.setCustomValidity("날짜를 선택해주세요");
  };

  useEffect(() => {
    externalDates && setPeriodDates(externalDates);
  }, [externalDates]);

  return (
    <InputBase
      inputId = {id}
      inputRootClassName = {clsx("h-[3.75rem] cursor-pointer relative", className)}
      onClick = {handleDatePicker}
      label = {label}
      required = {required}
      inputComponent = {
        <input
          type = "text"
          placeholder = "날짜를 입력해주세요"
          className = {clsx("flex-1 focus-visible:outline-0 cursor-pointer pointer-events-none", inputClassName)}
          value = {periodDates.startDate && (!afterAllDate ? `${startDate}${periodDates.endDate && ` - ${endDate}`}` : `${startDate} ~`)}
          onKeyDown = {() => false}
          onFocus = {(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()}
          onChange = {() => {}}
          onInvalid = {handleOnInvalid}
          disabled = {disabled}
          required = {required}
        />
      }
      endComponent = {
        <CalendarBlank size = {24} className = "text-gray-05" />
      }
    />
  );
};

export default InputDatePicker;
