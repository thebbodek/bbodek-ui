import { forwardRef, useId } from "react";

import { Typography } from "@/index";
import { SelectButtonItemProps } from "./types";

const SelectBubbleItem = forwardRef((
    {
      label,
      ...props
    }: Omit<SelectButtonItemProps, "ref">,
    ref: React.Ref<HTMLInputElement>,
  ) => {
  const id = useId();

  return (
    <li>
      <label className = "flex" htmlFor = {id}>
        <input
          ref = {ref}
          id = {id}
          type = "radio"
          className = {"none peer"}
          {...props}
        />
        <Typography
          className = "p-2.5 border border-gray-04 peer-checked:bg-primary-00 peer-checked:border-primary-00 peer-checked:text-primary-03 cursor-pointer rounded-default"
          theme = "subhead-02-bold"
          color = "gray-05"
          text = {label}
        />
      </label>
    </li>
  );
});

export default SelectBubbleItem;

SelectBubbleItem.displayName = "SelectBubbleItem";
