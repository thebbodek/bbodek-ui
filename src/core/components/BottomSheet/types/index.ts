import { HTMLAttributes } from "react";

import { ModalBaseProps } from "../../Modal/ModalBase/types";

export interface BottomSheetProps extends Pick<ModalBaseProps, "target" | "isOpen">, Omit<HTMLAttributes<HTMLElement>, "title"> {
  onClose: ModalBaseProps["onClose"];
}
