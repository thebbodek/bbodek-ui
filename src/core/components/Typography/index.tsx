import clsx from "clsx";
import React from "react";

import { ThemeColors, ThemeTypography } from "@/types";

export interface TypographyProps<T extends React.ElementType = "span"> {
  element?: T;
  text: string;
  theme?: ThemeTypography;
  color?: ThemeColors;
}

const Typography = <T extends React.ElementType = "span">({
  theme = "body-01-regular",
  color = "gray-08",
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
