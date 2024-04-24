import { ColorThemeType } from "@/types";
import { SIZE } from "../constants";

export type SizeType = typeof SIZE[keyof typeof SIZE];

export interface LabelProps<T extends React.ElementType = "div">{
  element?: T;
  colorTheme: ColorThemeType;
  size: SizeType;
  label: React.ReactNode;
  icon?: React.ReactNode;
}
