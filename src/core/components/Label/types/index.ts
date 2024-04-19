
import { SIZE, VARIANTS } from "../constants";

export type VariantsType = typeof VARIANTS[keyof typeof VARIANTS];

export type SizeType = typeof SIZE[keyof typeof SIZE];

export interface LabelProps<T extends React.ElementType = "div">{
  element?: T;
  variants: VariantsType
  size: SizeType
  label: string
  icon?: React.ReactNode
}
