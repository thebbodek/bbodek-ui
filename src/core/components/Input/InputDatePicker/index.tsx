import { CalendarBlank } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useState } from "react";

import { PeriodDates } from "../../Calendar/DatePickerCalendar/types/CalendarComponentProps";
import Typography from "../../Typography";
import DatePicker from "./DatePicker";
import { InputDatePickerProps } from "./types";

const InputDatePicker = ({
  overlay,
  disabledDates,
  currentMonth,
  useTab = false,
  disabled = false,
}: InputDatePickerProps) => {
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
          disabled = {disabled}
          isOpen = {isOpen}
          currentMonth = {currentMonth}
          close = {(periodDates: PeriodDates) => {
            resolve(periodDates);
            close();
          }}
          useTab = {useTab}
          disabledDates = {disabledDates}/>
      ));
    });
  };

  const handleDatePicker = async () => {
    const periodDates = await onDatePickerClick();

    setPeriodDates(periodDates);
  };

  return (
    <div>
      <button
        type = "button"
        className = "w-full flex items-center justify-between px-3 py-4 text-subhead-02-regular bg-transparent rounded-xl overflow-hidden border border-gray-03"
        onClick = {handleDatePicker}
        disabled = {disabled}
      >
        {
          periodDates.startDate ?
            <Typography
              text = {`${startDate}${periodDates.endDate ? ` - ${endDate}` : ""}`}
              theme = "subhead-01-regular"
            /> :
            <Typography text = "날짜를 선택해주세요" color = "gray-06" />
        }
        <CalendarBlank size = {24} className = "text-gray-05" />
      </button>
    </div>
  );
};

export default InputDatePicker;
