import clsx from "clsx";
import React from "react";

import { THEME_COLOR } from "@/constants/color";
import { THEME_TYPOGRAPHY } from "@/constants/typography";
import { ThemeColors, ThemeTypography } from "@/types";
import { TypographyProps } from "./types";

const Typography = <T extends React.ElementType = "span">({
  theme = THEME_TYPOGRAPHY["BODY_01_REGULAR"] as ThemeTypography,
  color = THEME_COLOR["GRAY_08"] as ThemeColors,
  text,
  element: Element,
  ...props
}: TypographyProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const { className, ...rest } = props;
  const Component: React.ElementType = Element || "span";

  return (
    <Component className = {clsx(`text-${theme} text-${color}`, className)} {...rest}>
      {text}
    </Component>
    );
};

export default Typography;
