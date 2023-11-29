import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import useClickOutside from "@/hooks/useClickOutSide";
import ModalPortal from "../ModalPortal";
import { MODAL_CONTENT_POSITION, MODAL_CONTENT_SIZE, MODAL_DIMMED_COLOR } from "./constants";
import { ModalBaseProps } from "./types";

const ModalBase = forwardRef((
    {
      target,
      variants,
      isOpen,
      dimmed = true,
      onClose,
      children,
      ...props
    }: PropsWithChildren<ModalBaseProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { contentRef } = useClickOutside<HTMLDivElement>(onClose);
  const { className, ...rest } = props;

  if (!isOpen) return null;

  return (
    <ModalPortal target = {target}>
      <dialog
        ref = {ref}
        className = {clsx(
          "w-full h-full open:animate-fade-in z-50",
          MODAL_CONTENT_POSITION[variants],
          dimmed && MODAL_DIMMED_COLOR[variants],
          className,
        )}
        open = {isOpen}
        {...rest}
      >
        <div
          ref = {contentRef}
          className = {MODAL_CONTENT_SIZE[variants]}
        >
          {children}
        </div>
      </dialog>
    </ModalPortal>
  );
});

export default ModalBase;
