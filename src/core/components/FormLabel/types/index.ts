import { ThemeColors } from "@/types";
import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface FormLabelProps {
  inputId: LabelHTMLAttributes<HTMLLabelElement>["htmlFor"]
  labelColor?: ThemeColors;
  label: string;
  required?: InputHTMLAttributes<HTMLInputElement>["required"];
  feedback?: string;
}
