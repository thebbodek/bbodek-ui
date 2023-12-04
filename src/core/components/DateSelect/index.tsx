import dayjs from "dayjs";
import clsx from "clsx";
import { CalendarBlank } from "@phosphor-icons/react";

import DateSelectCalendar from "../Calendar/DateSelectCalendar";
import Typography from "../Typography";
import Divider from "../Divider";
import Button from "../Button";
import { DateSelectProps } from "./types";

const DateSelect = ({
  isOpen,
  periodDates,
  selectedDate,
  currentMonth,
  disabledDates,
  onToggle,
  onDateClick,
}: DateSelectProps) => {
  const startDate = dayjs(periodDates.startDate).format("YYYY. MM. DD");
  const isSameYear = dayjs(periodDates.startDate).year === dayjs(periodDates.endDate).year;
  const fullEndDate = dayjs(periodDates.endDate).format("YYYY. MM. DD");
  const shortEndDate = dayjs(periodDates.endDate).format("MM. DD");

  const calcDiffDate = () => {
    return dayjs(periodDates.endDate).diff(periodDates.startDate, "day") + 1;
  };
  return (
    <div className = "relative">
      <button
        type = "button"
        className = "w-full flex items-center justify-between px-3 py-4 text-subhead-02-regular bg-transparent rounded-xl overflow-hidden border border-gray-03"
        onClick = {onToggle}
      >
        {
          periodDates.startDate ?
            <Typography
              text = {`${startDate}${periodDates.endDate ? ` - ${fullEndDate}` : ""}`}
              theme = "subhead-01-regular"
            /> :
            <Typography text = "날짜를 선택해주세요" color = "gray-06" />
        }
        <CalendarBlank size = {24} className = "text-gray-05" />
      </button>
      <div className = {clsx("absolute w-full min-w-[25rem] max-w-[34rem] pt-6 z-10 rounded-xl border mt-2 bg-white", { "hidden": !isOpen })}>
        <div className = "px-4">
          <div className = "flex-v-stack gap-3 mb-9">
            <Typography element = "h6" text = "날짜 선택" theme = "subhead-01-bold" />
            <Typography text = "사용하실 날짜를 선택해주세요" color = "gray-06" />
          </div>
          <DateSelectCalendar
            selectedDate = {selectedDate}
            currentMonth = {currentMonth}
            disabledDates = {disabledDates}
            onDateClick = {onDateClick}
          />
          <Typography
          element = "p"
          text = {`사용일자 : 
            ${periodDates.startDate ? `${startDate} ${!periodDates.endDate ? "(하루)" : ""}` : "시작일을 선택해주세요"}
            ${periodDates.endDate ? ` - ${isSameYear ? shortEndDate : fullEndDate} (${calcDiffDate()}일)` : ""}
          `}
          theme = "subhead-02-bold"
          color = "primary-03"
          className = "my-16 text-center"
        />
        </div>
        <Divider />
        <div className = "flex gap-3 py-5 px-6">
          <Button
            backgroundColor = "white"
            color = "gray-06"
            content = "취소"
            size = "h-60"
            rounded = "rounded-12"
            className = "w-full border"
            onClick = {onToggle}
          />
          <Button
            backgroundColor = "primary-03"
            color = "white"
            content = "적용"
            size = "h-60"
            rounded = "rounded-12"
            className = "w-full"
            onClick = {onToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
