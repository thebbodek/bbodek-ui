import clsx from "clsx";
import { forwardRef, useId, useState } from "react";

import InputBase from "../InputBase";
import { InputSelectProps } from "./types";

const InputSelect = forwardRef((
    {
      options,
      placeholder,
      value,
      ...props
    }: InputSelectProps,
    ref: React.Ref<HTMLSelectElement>,
  ) => {
  const id = useId();
  const [ isSelectedValue, setIsSelectedValue ] = useState(false);
  const { label, rootClassName, className, onChange, required, ...rest } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    !isSelectedValue && setIsSelectedValue(true);
    onChange?.(e);
  };

  return (
    <InputBase
      label = {label}
      inputId = {id}
      rootClassName = {rootClassName}
      inputRootClassName = {"py-0 h-[3.75rem]"}
      inputComponent = {
        <select
          ref = {ref}
          className = {clsx(
            "text-subhead-02-regular outline-none cursor-pointer",
            !value && !isSelectedValue ? "text-gray-05" : "text-gray-08",
            className,
          )}
          onChange = {onChangeHandler}
          required = {required}
          value = {value}
          {...rest}
        >
          <option value = "" selected disabled hidden>{placeholder}</option>
          {options}
        </select>
      }
      required = {required}
    />
  );
});

export default InputSelect;
