import clsx from "clsx";
import React, { forwardRef } from "react";

import { cn } from "@/utilities/utils";
import FormLabel from "../../FormLabel";
import { InputBaseProps } from "./types";

const InputBase = forwardRef(
  <T extends React.ElementType>(
    {
      inputId,
      element: Element,
      rootClassName,
      inputRootClassName,
      label,
      startComponent,
      inputComponent,
      endComponent,
      labelColor,
      borderColor = "gray-03",
      required,
      readOnly,
      ...props
    }: InputBaseProps<T>,
    ref: React.ComponentPropsWithRef<T>["ref"],
  ) => {
  const Component: React.ElementType = Element || "div";

  return (
    <Component ref = {ref} className = {clsx(label && "flex-v-stack gap-y-3", rootClassName)} {...props}>
      {label && <FormLabel inputId = {inputId} label = {label} labelColor = {labelColor} required = {required} />}
      <div
        className = {cn(
          `flex items-center px-3 py-4 text-subhead-02-regular bg-transparent rounded-xl overflow-hidden border border-${borderColor}`,
          inputRootClassName,
        )}
      >
        {startComponent && startComponent}
        {inputComponent && inputComponent}
        {!readOnly && endComponent && endComponent}
      </div>
    </Component>
  );
});

InputBase.displayName = "InputBase";

export default InputBase;
