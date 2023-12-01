import clsx from "clsx";
import { forwardRef } from "react";

import DropdownBase from "../DropdownBase";
import { DropdownFilterItemProps } from "./types";

const DropdownFilterItem = forwardRef((
    {
      className,
      children,
      checked,
      ...props
    }: DropdownFilterItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {

  return (
    <DropdownBase.Item
      ref = {ref}
      className = {clsx("text-gray-08 text-body-01-regular hover:font-bold", checked && "font-bold", className)}
      {...props}
    >
      {children}
    </DropdownBase.Item>
  );
});

export default DropdownFilterItem;
