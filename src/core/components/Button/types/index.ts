import { ThemeColors, ThemeTypography } from "@/types";
import { ButtonHTMLAttributes } from "react";

import { GAP, ROUNDED, SIZE } from "../constants";

export type ThemeType = Extract<ThemeTypography, "body-01-bold" | "body-02-bold" | "body-02-bold">;

export type SizeType = typeof SIZE[keyof typeof SIZE];

export type RoundedType = typeof ROUNDED[keyof typeof ROUNDED];

export type BorderColorType = Extract<ThemeColors, "gray-04" | "gray-03" | "gray-02" | "gray-01">;

export type GapType = typeof GAP[keyof typeof GAP];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeType;
  color: ThemeColors;
  backgroundColor: ThemeColors;
  size: SizeType;
  gap?: GapType;
  rounded?: RoundedType;
  borderColor?: BorderColorType;
  leftIcon?: React.ReactNode;
  content: string;
  rightIcon?: React.ReactNode;
  hasUnderline?: boolean;
}
