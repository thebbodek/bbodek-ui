import clsx from "clsx";
import { forwardRef, useId } from "react";

import { useInput } from "@/core/components/Input/hooks/useInput";
import { XCircle } from "@phosphor-icons/react";
import InputBase from "../InputBase";
import { InputTextFieldProps } from "./types";

const InputTextField = forwardRef((
    {
      labelColor,
      borderColor,
      label,
      regCallback,
      ...props
    }: InputTextFieldProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const { rootClassName, className, required, value, onChange, autoComplete = "off", ...rest } = props;
  const { inputValue, onChangeHandler, onResetInputValue } = useInput({ value, regCallback, onChange });
  const ResetIcon = <XCircle size = "100%" weight = "fill" fill = "#A9B2C7"/>;

  return (
    <InputBase
      inputId = {id}
      label = {label}
      rootClassName = {rootClassName}
      inputRootClassName = "h-[3.75rem]"
      inputComponent = {
        <input
          ref = {ref}
          id = {id}
          className = {clsx("bbodek-field", className)}
          type = "text"
          required = {required}
          value = {inputValue}
          onChange = {onChangeHandler}
          autoComplete = {autoComplete}
          {...rest}
        />
      }
      endComponent = {
        <button
          className = {clsx("w-7 h-7", inputValue ? "visible" : "invisible")}
          onClick = {onResetInputValue}
          aria-label = "초기화"
        >
          {ResetIcon}
        </button>
      }
      required = {required}
      labelColor = {labelColor}
      borderColor = {borderColor}
    />
  );
});

InputTextField.displayName = "InputTextField";

export default InputTextField;
