import { forwardRef, useId } from "react";

import { Typography } from "@/index";
import { GeneralTabItemProps } from "./types";

const GeneralTabItem = forwardRef((
    {
      label,
      theme = "subhead-01-bold",
      ...props
    }: Omit<GeneralTabItemProps, "ref">,
    ref: React.Ref<HTMLInputElement>,
  ) => {
  const id = useId();

  return (
    <li className = "flex rounded-[0.75rem] overflow-hidden flex-1">
      <label className = "flex w-full" htmlFor = {id}>
        <input
          ref = {ref}
          id = {id}
          type = "radio"
          className = {"hidden peer"}
          {...props}
        />
        <Typography
          className = "flex-1 px-2.5 py-3 text-center bg-transparent cursor-pointer peer-checked:bg-white peer-checked:text-black"
          theme = {theme}
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
