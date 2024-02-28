import { useEffect, useId, useState } from "react";

import clsx from "clsx";
import Button from "../../Button";
import DatePickerCalendar from "../../Calendar/DatePickerCalendar";
import { DATE_PICKER_TYPE } from "../../Calendar/DatePickerCalendar/constants";
import { PeriodDates } from "../../Calendar/DatePickerCalendar/types/DatePickerCalendarProps";
import Divider from "../../Divider";
import ModalPopUp from "../../Modal/ModalPopUp";
import GeneralTab from "../../Tab/GeneralTab/GeneralTab";
import Typography from "../../Typography";
import { DatePickerProps } from "./types";

const DatePicker = ({
  variants = DATE_PICKER_TYPE["PERIOD"],
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
  closeButtonText = "닫기",
  dateLabel,
  hasDatePickerTitle = true,
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
    setPeriodDates(!isFixStartDate ? periodDates! : { startDate: externalDates!["startDate"], endDate: periodDates["endDate"] });
    setIsAfterAllDate(afterAllDate !== undefined && afterAllDate);
  };

  return (
    <ModalPopUp isOpen = {isOpen}>
      <div
        className = {clsx("min-w-[20rem] w-[calc(100vw-1rem)] max-w-[30rem] pt-6 md:pt-8 rounded-xl bg-white", { "pt-4 md:pt-6 max-w-[35rem]": useTab })}>
        <div className = 'px-2 pb-2'>
          <div className = "px-2 md:px-5">
            {hasDatePickerTitle &&
              <Typography element = 'h6' text = '날짜 선택' className = "!text-body-02-bold md:!text-subhead-01-bold md:mb-2"/>
            }
            {useTab &&
              <GeneralTab
                items = {tabItems}
                className = "[&_span]:text-body-03-bold md:[&_span]:text-subhead-02-bold md:[&_span]:p-2 [&_span]:p-1.5 !p-1.5 md:!p-2 !rounded-lg [&_li]:rounded-lg mb-6 md:mb-8"
                />
              }
          </div>
          <DatePickerCalendar
            isFixStartDate = {isFixStartDate}
            variants = {variants}
            cutoffDate = {cutoffDate}
            cutoffAfterDate = {cutoffAfterDate}
            periodDates = {periodDates}
            disabledDates = {disabledDates}
            initialDate = {initialDate}
            onDateClick = {onDateClick}
            disabled = {disabled}
            useHoliday = {useHoliday}
            afterAllDate = {tabSelected === "afterAllDate"}
            label = {dateLabel}
          />
        </div>
        <Divider className = "mt-5" />
        <div className = 'flex py-3 md:py-5 px-4 md:px-6'>
          <Button
            backgroundColor = 'white'
            color = 'gray-06'
            content = {closeButtonText}
            size = 'h-52'
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
