import { forwardRef, useContext } from "react";

import clsx from "clsx";
import { DropdownContext } from "./index";
import { DropdownContextValue, DropdownTriggerProps } from "./types";

const DropdownTrigger = forwardRef((
    {
      onClick,
      className,
      children,
      ...props
    }: DropdownTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
  const { isToggle, setIsToggle } = useContext(DropdownContext) as DropdownContextValue;
  const content = typeof children === "function" ? children({ isToggle }) : children;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsToggle(v => !v);
    onClick?.(e);
  };

  return (
    <button
      ref = {ref}
      type = "button"
      onClick = {onClickHandler}
      className = {clsx("whitespace-nowrap cursor-pointer", className)}
      aria-haspopup = "listbox"
      aria-expanded = {isToggle}
      {...props}
    >
      {content}
    </button>
  );
});

export default DropdownTrigger;

DropdownTrigger.displayName = "DropdownTrigger";
