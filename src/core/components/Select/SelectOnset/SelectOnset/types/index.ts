import { InputHTMLAttributes } from "react";

import { ONSETS, VARIANTS } from "../constants";

export type VariantsType = typeof VARIANTS[keyof typeof VARIANTS];

export type OnsetType = typeof ONSETS[number];

export interface SelectOnsetProps extends Pick<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  variants: VariantsType;
  currentOnset: string;
  className?: HTMLElement["className"];
}
