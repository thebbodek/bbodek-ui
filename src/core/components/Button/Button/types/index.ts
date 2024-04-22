import { ButtonBaseProps } from "../../ButtonBase/types";

export interface ButtonProps extends Omit<ButtonBaseProps, "hasIcon"> {
  hasUnderline?: boolean
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  content: string;
}
