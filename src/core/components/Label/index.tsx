import clsx from "clsx";
import { forwardRef } from "react";

import { THEME_TYPOGRAPHY } from "@/constants/typography";
import { LABEL_ROUNDED, LABEL_SIZE, LABEL_VARIANTS } from "./constants";
import { LabelProps, ThemeType } from "./types";

const Label = forwardRef((
  {
    variants,
    height,
    theme = THEME_TYPOGRAPHY["BODY_01_BOLD"] as ThemeType,
    rounded,
    label,
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
          `flex items-center justify-center text-${theme}`,
          LABEL_VARIANTS[variants],
          LABEL_SIZE[height],
          LABEL_ROUNDED[rounded],
          className,
        )
      }
      {...rest}
    >
      {label}
    </div>
  );
});

export default Label;
