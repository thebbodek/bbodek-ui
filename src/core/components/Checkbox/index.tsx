import clsx from "clsx";
import { MouseEvent, forwardRef, useId } from "react";

import { CheckCircle, CheckSquare } from "@phosphor-icons/react";
import Typography from "../Typography";
import { CHECKBOX_SVG_SIZE, SVG_SIZE } from "./constants";
import { CheckboxProps } from "./types";

const Checkbox = forwardRef((
    {
      label,
      svgSize = SVG_SIZE["SIZE_24"],
      isCircle = false,
      className,
      ...props
    }: CheckboxProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const RectangleCheckbox =
    <CheckSquare size = "100%" weight = "fill" />;
  const CircleCheckbox =
    <CheckCircle size = "100%" weight = "fill" />;
  const svg = !isCircle ? RectangleCheckbox : CircleCheckbox;

  return (
    <label onClick = {(e: MouseEvent<HTMLLabelElement>) => e.stopPropagation()} htmlFor = {id} className = {clsx("cursor-pointer", label && "flex items-center gap-2.5", className)}>
      <input ref = {ref} id = {id} type = "checkbox" className = "peer hidden" {...props}/>
      <div className = {`${CHECKBOX_SVG_SIZE[svgSize]} [&>svg>path]:fill-[#C6CEDE] peer-checked:[&>svg>path]:fill-primary-03`}>
        {svg}
      </div>
      {label && <Typography text = {label} />}
    </label>
  );
});

export default Checkbox;
