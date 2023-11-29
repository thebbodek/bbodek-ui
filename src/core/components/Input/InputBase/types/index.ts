import { ThemeColors } from "@/types";

export interface InputBaseProps<T extends React.ElementType> extends React.HTMLAttributes<HTMLElement> {
  inputId: string;
  element?: T;
  rootClassName?: string;
  inputRootClassName?: string;
  label?: string;
  startComponent?: React.ReactNode;
  inputComponent: React.ReactNode;
  endComponent?: React.ReactNode;
  labelColor?: ThemeColors;
  borderColor?: ThemeColors;
  required?: boolean;
  readOnly?: boolean;
}
