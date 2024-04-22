import clsx from "clsx";
import ButtonBase from "../ButtonBase";
import { ROUNDED } from "../ButtonBase/constants";
import { BUTTON_SIZE } from "./constants";
import { ButtonIconProps } from "./types";

const ButtonIcon = ({ icon, isCircle = false, ...props }: ButtonIconProps) => {
  const { rounded, size, className, ...rest } = props;

  return (
    <ButtonBase className = {clsx(BUTTON_SIZE[size], className)} size = {size} rounded = {!isCircle ? rounded : ROUNDED["ROUNDED_FULL"]} {...rest}>
      {icon}
    </ButtonBase>
  );
};

export default ButtonIcon;
