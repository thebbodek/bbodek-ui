import { forwardRef } from "react";

import { FormLabel } from "@/index";
import clsx from "clsx";
import SelectBubbleItem from "../SelectBubbleItem";
import { ReturnType, SelectBubbleProps } from "./types";

const SelectBubble = forwardRef((
    {
      items,
      label,
      labelColor,
      required,
      labelSubText,
      ...props
    }: SelectBubbleProps,
    ref: React.Ref<HTMLUListElement>,
  ) => {
  const { className, ...rest } = props;

  return (
    <div className = {clsx("flex-v-stack gap-y-3", className)}>
      <FormLabel label = {label} labelColor = {labelColor} required = {required} labelSubText = {labelSubText}/>
      <ul ref = {ref} className = {"flex gap-x-3"} {...rest}>
        {items}
      </ul>
    </div>
  );
}) as unknown as ReturnType;

export default SelectBubble;

SelectBubble.displayName = "SelectBubble";
SelectBubble.Item = SelectBubbleItem;
