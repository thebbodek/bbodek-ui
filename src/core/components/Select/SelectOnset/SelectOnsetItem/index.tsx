import { forwardRef, useId } from "react";

import { Typography } from "@/index";
import { OnsetItemProps } from "./types";

const SelectOnsetItem = forwardRef((
    {
      onset,
      ...props
    }: OnsetItemProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
  const id = useId();

  return (
    <li>
      <label>
        <input
          ref = {ref}
          id = {id}
          type = "radio"
          className = {"hidden peer"}
          name = "onset"
          value = {onset}
          {...props}
        />
        <Typography
          className = "flex items-center justify-center w-[1.875rem] h-[1.875rem] border border-gray-03 peer-checked:text-primary-03 peer-checked:bg-primary-00 peer-checked:border-primary-00 rounded cursor-pointer"
          theme = "body-02-regular"
          color = "gray-06"
          text = {onset}
        />
      </label>
    </li>
  );
});

export default SelectOnsetItem;

SelectOnsetItem.displayName = "SelectOnsetItem";
