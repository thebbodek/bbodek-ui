import { useState, useId, useEffect } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { CalendarBlank } from "@phosphor-icons/react";

import DatePickerCalendar from "../Calendar/DatePickerCalendar";
import Typography from "../Typography";
import Divider from "../Divider";
import Button from "../Button";
import GeneralTab from "../Tab/GeneralTab/GeneralTab";
import { InputDatePickerProps } from "./types";
import useClickOutside from "@/hooks/useClickOutSide";

const InputDatePicker = ({
  isOpen,
  periodDates,
  selectedDate,
  currentMonth,
  disabledDates,
  useTab = false,
  disabled = true,
  onToggle,
  onClose,
  onDateClick,
}: InputDatePickerProps) => {
  const id = useId();
  const startDate = dayjs(periodDates.startDate).format("YYYY. MM. DD");
  const endDate = dayjs(periodDates.endDate).format("YYYY. MM. DD");
  const { contentRef } = useClickOutside<HTMLDivElement>(onClose);
  const [ tabSelected, setTabSelected ] = useState("selectedDate");
  const tabData = [
    { key: "selectedDate", label: "선택한 기간만 적용" },
    { key: "afterAllDate", label: "시작일부터 모든 날짜 적용" },
  ];

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

  useEffect(() => {
    if (disabled) {
      onClose();
    }
  }, [disabled]);

  return (
    <div className = "relative" ref = {contentRef}>
      <button
        type = "button"
        className = "w-full flex items-center justify-between px-3 py-4 text-subhead-02-regular bg-transparent rounded-xl overflow-hidden border border-gray-03"
        onClick = {onToggle}
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
      <div className = {clsx("absolute end-0 w-full pt-6 z-10 rounded-xl border mt-2 bg-white", { "hidden": !isOpen })}>
        <div className = "px-4">
          <Typography element = "h6" text = "날짜 선택" theme = "subhead-01-bold" />
          {useTab && <GeneralTab items = {tabItems} className = "mt-4 mb-11" />}
          <DatePickerCalendar
            selectedDate = {selectedDate}
            periodDates = {periodDates}
            currentMonth = {currentMonth}
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
            onClick = {onToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default InputDatePicker;
