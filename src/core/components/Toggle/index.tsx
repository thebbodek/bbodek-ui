import clsx from "clsx";
import { useId } from "react";

import FormLabel from "../FormLabel";
import { TOGGLE_CIRCLE_SIZE, TOGGLE_SIZE } from "./constants";
import { ToggleProps } from "./types";

const Toggle = ({
  size,
  label,
  className,
  onChange,
  checked,
  disabled = false,
  reverse = false,
  labelTheme,
  labelColor,
  required,
}: ToggleProps) => {
  const id = useId();

  return (
    <label
      htmlFor = {id}
      className = {clsx(
        "flex items-center gap-x-1 cursor-pointer",
        reverse && "flex-row-reverse",
        className,
      )}
    >
      {label && <FormLabel labelTheme = {labelTheme} label = {label} labelColor = {labelColor} required = {required} />}
      <input
        id = {id}
        type = 'checkbox'
        className = 'peer hidden'
        checked = {checked}
        onChange = {onChange}
        disabled = {disabled}
      />
      <div
        className = {clsx(
          "relative rounded-full bg-gray-03 transition-all peer-disabled:bg-gray-09 peer-checked:bg-primary-03 peer-checked:[&>.circle]:-left-[0.125rem] peer-disabled:cursor-not-allowed",
          TOGGLE_SIZE[size],
        )
      }>
        <div
          className = {clsx(
            "circle absolute left-[0.125rem] top-1/2 -translate-y-1/2 translate-x-0 transform rounded-full border border-solid border-gray-03 bg-white transition-all",
            TOGGLE_CIRCLE_SIZE[size],
          )}
        />
      </div>
    </label>
  );
};

export default Toggle;

