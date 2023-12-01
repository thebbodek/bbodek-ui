import { ThemeColors, ThemeTypography } from "@/types";

export interface TypographyProps<T extends React.ElementType = "span"> {
  element?: T;
  text: string;
  theme?: ThemeTypography;
  color?: ThemeColors;
}
