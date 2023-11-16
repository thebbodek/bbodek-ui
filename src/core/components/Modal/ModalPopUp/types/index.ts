import { HTMLAttributes } from "react";

import { ModalBaseProps } from "../../ModalBase/types";

export interface ModalPopUpProps extends Pick<ModalBaseProps, "target" | "isOpen" | "onClose">, HTMLAttributes<HTMLElement> {}
