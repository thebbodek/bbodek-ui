import clsx from "clsx";
import React, { PropsWithChildren, forwardRef } from "react";

import { SectionProps } from "./types";

const Section = forwardRef(
  <T extends React.ElementType>(
    {
      children,
      hasBorder = false,
      hasShadow = false,
      element: Element,
      ...props
    }: PropsWithChildren<SectionProps<T>>,
    ref: React.ComponentPropsWithRef<T>["ref"],
  ) => {
  const { className, ...rest } = props;
  const Component: React.ElementType = Element || "section";

  return (
    <Component
      ref = {ref}
      className = {
        clsx(
          "h-full bg-white rounded-default",
          hasBorder && "border border-gray-02",
          hasShadow && "shadow-section",
          className,
        )
      }
      {...rest}
    >
      {children}
    </Component>
  );
});

Section.displayName = "Section";

export default Section;
