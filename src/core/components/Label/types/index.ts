import { ThemeTypography } from "@/types";
import { HTMLAttributes } from "react";

import { ROUNDED, SIZE, VARIANTS } from "../constants";

export type VariantsType = typeof VARIANTS[keyof typeof VARIANTS];

export type SizeType = typeof SIZE[keyof typeof SIZE];

export type RoundedType = typeof ROUNDED[keyof typeof ROUNDED];

export type ThemeType = Extract<ThemeTypography, "body-01-bold" | "body-02-bold">;

export interface LabelProps extends HTMLAttributes<HTMLDivElement>{
  variants: VariantsType
  height: SizeType
  theme?: ThemeType
  rounded: RoundedType
  label: string
}
