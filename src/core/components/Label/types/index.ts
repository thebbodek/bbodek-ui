import { HTMLAttributes } from "react";

import { SIZE, VARIANTS } from "../constants";

export type VariantsType = typeof VARIANTS[keyof typeof VARIANTS];

export type SizeType = typeof SIZE[keyof typeof SIZE];

export interface LabelProps extends HTMLAttributes<HTMLDivElement>{
  variants: VariantsType
  size: SizeType
  label: string
  icon?: React.ReactNode
}
