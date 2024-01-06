import { CaretDown } from "@phosphor-icons/react";
import clsx from "clsx";
import { forwardRef } from "react";

import Typography from "../../Typography";
import DropdownBase from "../DropdownBase";
import { DropdownSelectTriggerProps } from "./types";

const DropdownSelectTrigger = forwardRef((
    {
      currentValue,
      ...props
    }: DropdownSelectTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
  const { className, placeholder, ...rest } = props;
  const showPlaceholder = placeholder && !currentValue;

  return (
    <DropdownBase.Trigger ref = {ref} className = {clsx("flex items-center justify-between w-full h-[3.75rem] p-3 gap-x-2 border border-gray-03 rounded-xl overflow-hidden", className)} {...rest}>
      {({ isToggle }) => (
        <>
          <Typography theme = "subhead-02-regular" color = "gray-08" className = {clsx(showPlaceholder && "!text-gray-05")} text = {currentValue ? currentValue : (placeholder ?? "")}/>
          <CaretDown size = "28" className = {clsx("text-gray-06", isToggle ? "rotate-180" : "rotate-0")} weight = "fill"/>
        </>
      )}
    </DropdownBase.Trigger>
  );
});

export default DropdownSelectTrigger;
