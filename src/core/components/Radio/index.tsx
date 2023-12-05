import { RadioButton } from "@phosphor-icons/react";
import clsx from "clsx";
import { forwardRef, useId } from "react";

import Typography from "../Typography";
import { SVG_SIZE } from "./constants";
import { RadioProps } from "./types";

const Radio = forwardRef((
    {
      label,
      svgSize = SVG_SIZE["SIZE_24"],
      className,
      ...props
    }: RadioProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();

  return (
    <label htmlFor = {id} className = {clsx("cursor-pointer", label && "flex items-center gap-x-2", className)}>
      <input ref = {ref} id = {id} type = "radio" className = "peer sr-only" {...props}/>
      <div className = {"[&>svg>path]:fill-[#C6CEDE] peer-checked:[&>svg>path]:fill-[#7595E7]"}>
        <RadioButton size = {svgSize} weight = "fill"/>
      </div>
      {label && <Typography text = {label} />}
    </label>
  );
});

export default Radio;
