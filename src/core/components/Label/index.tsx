import clsx from "clsx";

import { LABEL_SIZE, LABEL_VARIANTS } from "./constants";
import { LabelProps } from "./types";

const Label = <T extends React.ElementType = "div">({
  variants,
  size,
  label,
  icon,
  element: Element,
  ...props
}: LabelProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const { className, ...rest } = props;
  const Component: React.ElementType = Element || "div";

  return (
    <Component
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
    </Component>
  );
};

export default Label;
