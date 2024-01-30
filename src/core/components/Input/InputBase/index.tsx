import clsx from "clsx";
import React, { forwardRef } from "react";

import { cn } from "@/utilities/utils";
import FormLabel from "../../FormLabel";
import Typography from "../../Typography";
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
      error = false,
      required,
      readOnly,
      feedback,
      feedbackColor = "error",
      ...props
    }: InputBaseProps<T>,
    ref: React.ComponentPropsWithRef<T>["ref"],
  ) => {
  const Component: React.ElementType = Element || "div";

  return (
    <Component ref = {ref} className = {clsx(label && "flex-v-stack", rootClassName)} {...props}>
      {label &&
        <label className = "mb-2" htmlFor = {inputId}>
          <FormLabel label = {label} labelColor = {labelColor} required = {required} />
        </label>
      }
      <div
        className = {cn(
          `flex items-center px-3 py-4 text-subhead-02-regular bg-transparent rounded-xl overflow-hidden border border-${borderColor}`,
          error && "border-error",
          feedback && "mb-1",
          inputRootClassName,
        )}
      >
        {startComponent && startComponent}
        {inputComponent && inputComponent}
        {!readOnly && endComponent && endComponent}
      </div>
      {feedback ? <Typography theme = "body-03-regular" color = {feedbackColor} text = {feedback} /> : null}
    </Component>
  );
});

InputBase.displayName = "InputBase";

export default InputBase;
