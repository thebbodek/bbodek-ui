import { forwardRef, useId } from "react";

import { Typography } from "@/index";
import { TableTabItemProps } from "./types";

const TableTabItem = forwardRef((
    {
      label,
      ...props
    }: Omit<TableTabItemProps, "ref">,
    ref: React.Ref<HTMLInputElement>,
  ) => {
  const id = useId();

  return (
    <li className = "flex-1">
      <label className = "flex" htmlFor = {id}>
        <input
          ref = {ref}
          id = {id}
          type = "radio"
          className = {"sr-only peer"}
          {...props}
        />
        <Typography
          className = "flex-1 pb-3 text-center bg-transparent cursor-pointer border-b-2 border-transparent mb-[-0.0625rem] peer-checked:border-b-black peer-checked:text-black"
          theme = "subhead-02-bold"
          color = "gray-05"
          text = {label}
        />
      </label>
    </li>
  );
});

TableTabItem.displayName = "TableTabItem";

export default TableTabItem;
