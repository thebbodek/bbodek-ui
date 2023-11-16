import clsx from "clsx";
import React, { forwardRef } from "react";

import TableTabItem from "../TableTabItem";
import { ReturnType, TableTabProps } from "./types";

const TableTab = forwardRef((
    {
      items,
      ...props
    }: Omit<TableTabProps, "ref">,
    ref: React.Ref<HTMLUListElement>,
  ) => {
  const { className, ...rest } = props;

  return (
    <ul
      ref = {ref}
      className = {clsx("flex border-b border-gray-01", className)}
      {...rest}
    >
      {items}
    </ul>
  );
}) as unknown as ReturnType;

TableTab.displayName = "TableTab";
TableTab.Item = TableTabItem;

export default TableTab;
