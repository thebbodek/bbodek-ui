import clsx from "clsx";
import { forwardRef } from "react";

import { DropdownItemsProps } from "./types";

const DropdownItems = forwardRef((
    {
      className,
      items,
      ...props
    }: DropdownItemsProps,
    ref: React.Ref<HTMLUListElement>,
  ) => {

  return (
    <ul
      ref = {ref}
      className = {clsx("absolute z-10", className)}
      role = "listbox"
      {...props}
    >
      {items}
    </ul>
  );
});

export default DropdownItems;

DropdownItems.displayName = "DropdownItems";
