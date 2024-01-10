import { useEffect, useId, useState } from "react";

import Button from "../../Button";
import DatePickerCalendar from "../../Calendar/DatePickerCalendar";
import { PeriodDates } from "../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps";
import Divider from "../../Divider";
import ModalPopUp from "../../Modal/ModalPopUp";
import GeneralTab from "../../Tab/GeneralTab/GeneralTab";
import Typography from "../../Typography";
import { DatePickerProps } from "./types";

const DatePicker = ({
  variants = "period",
  cutoffDate,
  cutoffAfterDate,
  isOpen,
  close,
  initialDate,
  disabled,
  disabledDates,
  externalDates,
  useTab = false,
  dateLabel,
}: DatePickerProps) => {
  const id = useId();
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });
  const [ tabSelected, setTabSelected ] = useState("selectedDate");
  const [ isAfterAllDate, setIsAfterAllDate ] = useState(false);
  const tabData = [
    { key: "selectedDate", label: "선택한 기간만 적용" },
    { key: "afterAllDate", label: "시작일부터 모든 날짜 적용" },
  ];

  const handleClose = () => {
    close(periodDates, isAfterAllDate);
  };

  useEffect(() => {
    externalDates && setPeriodDates(externalDates);
  }, [externalDates]);

  const tabItems = tabData.map(item => (
    <GeneralTab.Item
      key = {item.key}
      label = {item.label}
      name = {id}
      theme = 'body-01-bold'
      checked = {item.key === tabSelected}
      value = {item.key}
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        setTabSelected(e.target.value);
      }}
    />
  ));

  const onDateClick = (periodDates: PeriodDates, afterAllDate?: boolean) => {
    setPeriodDates(periodDates!);
    setIsAfterAllDate(afterAllDate !== undefined && afterAllDate);
  };

  return (
    <ModalPopUp isOpen = {isOpen}>
      <div className = {"w-[35.5rem] pt-8 rounded-xl bg-white"}>
        <div className = 'px-6'>
          <div className = "px-5 mb-6">
            <Typography className = "mb-6" element = 'h6' text = '날짜 선택' theme = 'subhead-01-bold' />
            {useTab && <GeneralTab items = {tabItems} />}
          </div>
          <DatePickerCalendar
            variants = {variants}
            cutoffDate = {cutoffDate}
            cutoffAfterDate = {cutoffAfterDate}
            periodDates = {periodDates}
            disabledDates = {disabledDates}
            initialDate = {initialDate}
            onDateClick = {onDateClick}
            disabled = {disabled}
            afterAllDate = {tabSelected === "afterAllDate"}
            label = {dateLabel}
          />
        </div>
        <Divider className = "mt-5" />
        <div className = 'flex py-5 px-6'>
          <Button
            backgroundColor = 'white'
            color = 'gray-06'
            content = '닫기'
            size = 'h-60'
            rounded = 'rounded-12'
            className = 'w-full border'
            onClick = {handleClose}
          />
        </div>
      </div>
    </ModalPopUp>
  );
};

export default DatePicker;
