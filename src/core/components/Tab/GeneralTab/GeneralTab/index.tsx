import clsx from "clsx";
import React, { forwardRef } from "react";

import GeneralTabItem from "../GeneralTabItem";
import { GeneralTabProps, ReturnType } from "./types";

const GeneralTab = forwardRef((
    {
      items,
      ...props
    }: Omit<GeneralTabProps, "ref">,
    ref: React.Ref<HTMLUListElement>,
  ) => {
  const { className, ...rest } = props;

  return (
    <ul
      ref = {ref}
      className = {clsx("flex p-3 rounded-[1.25rem] bg-gray-01", className)}
      {...rest}
    >
      {items}
    </ul>
  );
}) as unknown as ReturnType;

export default GeneralTab;

GeneralTab.displayName = "GeneralTab";
GeneralTab.Item = GeneralTabItem;
