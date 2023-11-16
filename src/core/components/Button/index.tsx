import clsx from "clsx";
import { forwardRef } from "react";

import { THEME_TYPOGRAPHY } from "@/constants/typography";
import { BUTTON_GAP, BUTTON_ROUNDED, BUTTON_SIZE, GAP, ROUNDED } from "./constants";
import { ButtonProps, ThemeType } from "./types";

const Button = forwardRef(({
  theme = THEME_TYPOGRAPHY["BODY_01_BOLD"] as ThemeType,
  color,
  backgroundColor,
  size,
  gap = GAP["GAP_12"],
  rounded = ROUNDED["ROUNDED_12"],
  borderColor,
  leftIcon,
  content,
  rightIcon,
  hasUnderline = false,
  ...props
}: ButtonProps,
ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, ...rest } = props;
  const hasIcon = leftIcon || rightIcon;

  return (
    <button
      ref = {ref}
      type = {"button"}
      className = {clsx(
        "flex items-center justify-center",
        `text-${theme}`,
        `text-${color}`,
        `bg-${backgroundColor}`,
        BUTTON_SIZE[size],
        hasIcon && gap && BUTTON_GAP[gap],
        BUTTON_ROUNDED[rounded],
        borderColor && `border border-${borderColor}`,
        className,
        )}
      {...rest}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <span className = {clsx(hasUnderline && "underline")}>{content}</span>
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
});

export default Button;
