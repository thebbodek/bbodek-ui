import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import Typography from "@/core/components/Typography";
import { MONTH_BUTTON_STATUS } from "../constants";
import { CalendarHeaderProps } from "../types/CalendarHeader";

export const CalendarHeader = ({
  currentMonth,
  onPreviousMonthClick,
  onNextMonthClick,
  monthButtonStatus = MONTH_BUTTON_STATUS["IDLE"],
}: CalendarHeaderProps) => {
  const isDisabledMonthBtn = monthButtonStatus === MONTH_BUTTON_STATUS["DISABLE_BOTH"];
  const isDisablePrev = (isDisabledMonthBtn || monthButtonStatus === MONTH_BUTTON_STATUS["DISABLE_PREV"]) ?? false;
  const isDisableNext = (isDisabledMonthBtn || monthButtonStatus === MONTH_BUTTON_STATUS["DISABLE_NEXT"]) ?? false;
  const buttonClassNames = "group flex justify-center items-center";
  const iconClassNames = "text-gray-05 group-disabled:text-gray-03 group-disabled:cursor-not-allowed text-subhead-01-regular md:text-head-01-regular";

  return (
    <div className = {"flex gap-x-5 justify-center items-center mb-6"}>
      <button
        type = "button"
        className = {buttonClassNames}
        onClick = {() => !isDisablePrev && onPreviousMonthClick?.()}
        disabled = {isDisablePrev}
      >
        <CaretLeft className = {iconClassNames}/>
      </button>
      <Typography className = "text-center md:text-head-02-regular" color = "black" theme = "subhead-01-medium" text = {currentMonth} />
      <button
        type = "button"
        className = {buttonClassNames}
        onClick = {() => !isDisableNext && onNextMonthClick?.()}
        disabled = {isDisableNext}
      >
        <CaretRight className = {iconClassNames}/>
      </button>
    </div>
  );
};
