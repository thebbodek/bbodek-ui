import { ThemeColors } from "@/types";
import { InputHTMLAttributes } from "react";

export interface FormLabelProps {
  labelColor?: ThemeColors;
  label: string;
  required?: InputHTMLAttributes<HTMLInputElement>["required"];
  feedback?: string;
}
