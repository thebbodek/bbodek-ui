import { HTMLAttributes } from "react";

import { ModalBaseProps } from "../../Modal/ModalBase/types";
import { TypographyProps } from "../../Typography";

export interface DrawerProps extends Pick<ModalBaseProps, "target" | "isOpen">, HTMLAttributes<HTMLElement> {
  title: TypographyProps<"strong">["text"];
  titleSub?: TypographyProps<"span">["text"];
  onClose: ModalBaseProps["onClose"];
}
