import clsx from "clsx";
import { forwardRef } from "react";

import { LABEL_SIZE, LABEL_VARIANTS } from "./constants";
import { LabelProps } from "./types";

const Label = forwardRef((
  {
    variants,
    size,
    label,
    icon,
    ...props
  }: LabelProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { className, ...rest } = props;

  return (
    <div
      ref = {ref}
      className = {
        clsx(
          "flex items-center gap-1 justify-center",
          LABEL_VARIANTS[variants],
          LABEL_SIZE[size],
          className,
        )
      }
      {...rest}
    >
      {icon && icon}
      {label}
    </div>
  );
});

export default Label;
