import { ButtonBaseProps } from "../../ButtonBase/types";

export interface IconButtonProps extends Omit<ButtonBaseProps, "hasIcon" | "gap"> {
  icon: React.ReactNode;
  isCircle?: boolean;
}
