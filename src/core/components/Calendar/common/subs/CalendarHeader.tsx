import React from "react";
import Typography from "@/core/components/Typography";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface CalendarHeaderProps {
  currentMonth: string;
  onPreviousMonthClick?: () => void;
  onNextMonthClick?: () => void;
}

export const CalendarHeader = ({
  currentMonth,
  onPreviousMonthClick,
  onNextMonthClick,
}: CalendarHeaderProps) => {
  return (
    <div className = {"flex gap-6 justify-center items-center mb-8"}>
      <button
        type = "button"
        className = {"flex justify-center items-center"}
        onClick = {onPreviousMonthClick}
      >
        <CaretLeft size = {24} className = "text-gray-05"/>
      </button>
      <Typography theme = "head-01-regular" text = {currentMonth} />
      <button
        type = "button"
        className = {"flex justify-center items-center"}
        onClick = {onNextMonthClick}
      >
        <CaretRight size = {24} className = "text-gray-05"/>
      </button>
    </div>
  );
};
