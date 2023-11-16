import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export interface ModalPortalProps {
  target?: string;
}

const ModalPortal = ({
  target = "modal",
  children,
}: PropsWithChildren<ModalPortalProps>) => {
  const container = document.getElementById(target) as HTMLElement;

  return container ? createPortal(children, container) as React.ReactPortal : null;
};

export default ModalPortal;
