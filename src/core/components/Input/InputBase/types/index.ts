import { LabelHTMLAttributes } from "react";

import { FormLabelProps } from "@/core/components/FormLabel/types";
import { ThemeColors } from "@/types";

export interface InputBaseProps<T extends React.ElementType> extends React.HTMLAttributes<HTMLElement>, Omit<FormLabelProps, "label"> {
  label?: FormLabelProps["label"];
  inputId: LabelHTMLAttributes<HTMLLabelElement>["htmlFor"]
  element?: T;
  rootClassName?: string;
  inputRootClassName?: string;
  startComponent?: React.ReactNode;
  inputComponent: React.ReactNode;
  endComponent?: React.ReactNode;
  borderColor?: ThemeColors;
  error?: boolean
  readOnly?: boolean;
  feedback?: React.ReactNode;
}
