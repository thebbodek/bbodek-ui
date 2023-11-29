import clsx from "clsx";
import React, { forwardRef } from "react";

import { cn } from "@/utilities/utils";
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
      labelColor = "gray-04",
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
      {label && (
        <label htmlFor = {inputId} className = {`flex gap-x-0.5 text-${labelColor} text-body-02-regular`}>
          {label}
          {required && <span className = "text-primary-03">*</span>}
        </label>
      )}
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
