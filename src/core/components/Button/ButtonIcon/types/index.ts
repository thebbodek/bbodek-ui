import { ButtonBaseProps } from "../../ButtonBase/types";

export interface ButtonIconProps extends Omit<ButtonBaseProps, "hasIcon" | "gap"> {
  icon: React.ReactNode;
  isCircle?: boolean;
}
