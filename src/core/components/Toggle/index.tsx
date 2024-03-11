import clsx from "clsx";
import { useId } from "react";

import FormLabel from "../FormLabel";
import { ToggleProps } from "./types";

const Toggle = ({
  label,
  className,
  onChange,
  checked,
  disabled = false,
  reverse = false,
  labelColor,
  required,
}: ToggleProps) => {
  const id = useId();

  return (
    <div
      className = {clsx(
        "flex items-center gap-x-1",
        reverse && "flex-row-reverse",
        className,
      )}
    >
      <FormLabel label = {label} labelColor = {labelColor} required = {required} />
      <label htmlFor = {id}>
        <input
          id = {id}
          type = 'checkbox'
          className = 'peer hidden'
          checked = {checked}
          onChange = {onChange}
          disabled = {disabled}
        />
        <div className = 'relative h-[2rem] w-[3.5rem] cursor-pointer rounded-full bg-gray-03 transition-all peer-disabled:bg-gray-09 peer-checked:bg-primary-03 peer-checked:[&>.circle]:-left-[0.125rem] peer-checked:[&>.circle]:translate-x-full peer-disabled:cursor-not-allowed'>
          <div className = 'circle absolute left-[0.125rem] top-1/2 h-[1.75rem] w-[1.75rem] -translate-y-1/2 translate-x-0 transform rounded-full border border-solid border-gray-03 bg-white transition-all' />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
