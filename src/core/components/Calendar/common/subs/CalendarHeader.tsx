import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import Typography from "@/core/components/Typography";

export interface CalendarHeaderProps {
  currentMonth: string;
  onPreviousMonthClick?: () => void;
  onNextMonthClick?: () => void;
  isDisabledMonthBtn?: boolean;
  isDisablePrevMonthBtn?: boolean;
  isDisableNextMonthBtn?: boolean;
}

export const CalendarHeader = ({
  currentMonth,
  onPreviousMonthClick,
  onNextMonthClick,
  isDisabledMonthBtn,
  isDisablePrevMonthBtn,
  isDisableNextMonthBtn,
}: CalendarHeaderProps) => {
  const isDisablePrev = (isDisabledMonthBtn || isDisablePrevMonthBtn) ?? false;
  const isDisableNext = (isDisabledMonthBtn || isDisableNextMonthBtn) ?? false;
  const buttonClassNames = "group flex justify-center items-center";
  const iconClassNames = "text-gray-05 group-disabled:text-gray-03 group-disabled:cursor-not-allowed";

  return (
    <div className = {"flex gap-6 justify-center items-center mb-8"}>
      <button
        type = "button"
        className = {buttonClassNames}
        onClick = {() => !isDisablePrev && onPreviousMonthClick?.()}
        disabled = {isDisablePrev}
      >
        <CaretLeft size = {24} className = {iconClassNames}/>
      </button>
      <Typography theme = "head-01-regular" text = {currentMonth} />
      <button
        type = "button"
        className = {buttonClassNames}
        onClick = {() => !isDisableNext && onNextMonthClick?.()}
        disabled = {isDisableNext}
      >
        <CaretRight size = {24} className = {iconClassNames}/>
      </button>
    </div>
  );
};
