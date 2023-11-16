import { forwardRef, useId } from "react";

import { Typography } from "@/index";
import { GeneralTabItemProps } from "./types";

const GeneralTabItem = forwardRef((
    {
      label,
      ...props
    }: Omit<GeneralTabItemProps, "ref">,
    ref: React.Ref<HTMLInputElement>,
  ) => {
  const id = useId();

  return (
    <li className = "rounded-[0.75rem] overflow-hidden flex-1">
      <label htmlFor = {id}>
        <input
          ref = {ref}
          id = {id}
          type = "radio"
          className = {"sr-only peer"}
          {...props}
        />
        <Typography
          className = "px-2.5 py-3 text-subhead-01-bold text-gray-05 text-center bg-transparent cursor-pointer peer-checked:bg-white peer-checked:text-black"
          theme = "subhead-01-bold"
          color = "gray-05"
          text = {label}
        >
          {label}
        </Typography>
      </label>
    </li>
  );
});

GeneralTabItem.displayName = "GeneralTabItem";

export default GeneralTabItem;
