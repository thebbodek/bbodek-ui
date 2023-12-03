import clsx from "clsx";
import { forwardRef, useId } from "react";

import Typography from "../../Typography";
import InputBase from "../InputBase";
import { useInput } from "../hooks/useInput";
import { TEXT_AREA_HEIGHT } from "./constants";
import { InputTextAreaProps } from "./types";

const InputTextArea = forwardRef((
    {
      labelColor,
      borderColor,
      label,
      textAreaHeight,
      regCallback,
      ...props
    }: InputTextAreaProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
  const id = useId();
  const { rootClassName, className, required, value, onChange, autoComplete = "off", maxLength, ...rest } = props;
  const { inputValue, onChangeHandler } = useInput({ value, regCallback, onChange });
  const currentInputValueLength = (inputValue as string).length;

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(e.target.value.length > maxLength!) return;

    onChangeHandler(e);
  };

  return (
    <InputBase
      label = {label}
      inputId = {id}
      rootClassName = {rootClassName}
      inputRootClassName = {clsx("flex-v-stack", TEXT_AREA_HEIGHT[textAreaHeight])}
      inputComponent = {
        <textarea
          ref = {ref}
          className = {clsx("bbodek-field w-full resize-none", className)}
          autoComplete = {autoComplete}
          onChange = {onChangeTextArea}
          required = {required}
          value = {inputValue}
          maxLength = {maxLength}
          {...rest}
        />
      }
      endComponent = {
        <Typography
          className = "ml-auto"
          color = "gray-05"
          text = {`${currentInputValueLength} / ${maxLength}`}
        />
      }
      required = {required}
      labelColor = {labelColor}
      borderColor = {borderColor}
    />
  );
});

export default InputTextArea;
