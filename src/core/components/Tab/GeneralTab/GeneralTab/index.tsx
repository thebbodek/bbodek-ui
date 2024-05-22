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
      className = {clsx("flex p-2.5 rounded-[1.25rem] bg-gray-01", className)}
      {...rest}
    >
      {items}
    </ul>
  );
}) as unknown as ReturnType;

GeneralTab.displayName = "GeneralTab";
GeneralTab.Item = GeneralTabItem;

export default GeneralTab;

