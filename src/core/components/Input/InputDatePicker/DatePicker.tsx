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
  isOpen,
  close,
  disabled,
  disabledDates,
  externalDates,
  useTab = false,
}: DatePickerProps) => {
  const id = useId();
  const [ periodDates, setPeriodDates ] = useState<PeriodDates>({
    startDate: "",
    endDate: "",
  });

  const [ tabSelected, setTabSelected ] = useState("selectedDate");
  const tabData = [
    { key: "selectedDate", label: "선택한 기간만 적용" },
    { key: "afterAllDate", label: "시작일부터 모든 날짜 적용" },
  ];

  const handleClose = () => {
    close(periodDates);
  };

  useEffect(() => {
    externalDates && setPeriodDates(externalDates);
  }, [externalDates]);

  const tabItems = tabData.map(item => (
    <GeneralTab.Item
      key = {item.key}
      label = {item.label}
      name = {id}
      theme = "body-01-bold"
      checked = {item.key === tabSelected}
      value = {item.key}
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        setTabSelected(e.target.value);
      }}
    />
  ));

  const onDateClick = (periodDates: PeriodDates) => {
    setPeriodDates(periodDates!);
  };

  return (
    <ModalPopUp isOpen = {isOpen}>
      <div className = {"w-[30rem] pt-6 rounded-xl border bg-white"}>
        <div className = "px-4">
          <Typography element = "h6" text = "날짜 선택" theme = "subhead-01-bold" />
          {useTab && <GeneralTab items = {tabItems} className = "mt-4 mb-11" />}
          <DatePickerCalendar
            variants = {variants}
            cutoffDate = {cutoffDate}
            periodDates = {periodDates}
            disabledDates = {disabledDates}
            onDateClick = {onDateClick}
            disabled = {disabled}
            afterAllDate = {tabSelected === "afterAllDate"}
          />
        </div>
        <Divider />
        <div className = "flex gap-3 py-5 px-6">
          <Button
            backgroundColor = "white"
            color = "gray-06"
            content = "닫기"
            size = "h-60"
            rounded = "rounded-12"
            className = "w-full border"
            onClick = {handleClose}
          />
        </div>
      </div>
    </ModalPopUp>
  );
};

export default DatePicker;
