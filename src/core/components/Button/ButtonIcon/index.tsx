import ButtonBase from "../ButtonBase";
import { ROUNDED } from "../ButtonBase/constants";
import { BUTTON_SIZE } from "./constants";
import { ButtonIconProps } from "./types";

const ButtonIcon = ({ icon, isCircle = false, ...props }: ButtonIconProps) => {
  const { rounded, size, ...rest } = props;

  return (
    <ButtonBase className = {BUTTON_SIZE[size]} size = {size} rounded = {!isCircle ? rounded : ROUNDED["ROUNDED_FULL"]} {...rest}>
      {icon}
    </ButtonBase>
  );
};

export default ButtonIcon;
