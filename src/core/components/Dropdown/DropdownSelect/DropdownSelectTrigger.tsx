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

  return (
    <DropdownBase.Trigger ref = {ref} {...props}>
      {({ isToggle }) => (
        <div className = "flex items-center p-3 gap-x-2 border border-gray-03 rounded-xl overflow-hidden">
          <Typography theme = "subhead-02-regular" color = "gray-07" text = {currentValue}/>
          <CaretDown size = "16" className = {clsx(" text-gray-07", isToggle ? "rotate-180" : "rotate-0")} weight = "fill"/>
        </div>
      )}
    </DropdownBase.Trigger>
  );
});

export default DropdownSelectTrigger;

{ /* <InputBase
      inputId = {id}
      inputRootClassName = "p-0"
      inputComponent = {
        <DropdownBase.Trigger ref = {ref} {...props}>
          {({ isToggle }) => (
            <div className = "bbodek-field flex items-center p-3 gap-x-2">
              <Typography theme = "subhead-02-regular" color = "gray-07" text = {currentValue}/>
              <CaretDown size = "16" className = {clsx(" text-gray-07", isToggle ? "rotate-180" : "rotate-0")} weight = "fill"/>
            </div>
          )}
        </DropdownBase.Trigger>
      }
    /> */ }
