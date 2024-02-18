import { X } from "@phosphor-icons/react";
import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import { useBlockScrollingEffect } from "@/hooks/effects/useBlockScrollingEffect";
import ModalBase from "../Modal/ModalBase";
import { VARIANTS } from "../Modal/ModalBase/constants";
import Section from "../Section";
import { BottomSheetProps } from "./types";

const BottomSheet = forwardRef((
    {
      onClose,
      children,
      isOpen,
      useCloseBtn = false,
      ...props
     }: PropsWithChildren<BottomSheetProps>,
     ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { target, className, ...rest } = props;
  const CloseIcon = <X size = "24" fill = "#343330"/>;

  useBlockScrollingEffect(isOpen);

  return (
    <ModalBase
      isOpen = {isOpen}
      target = {target ?? "modal"}
      ref = {ref}
      variants = {VARIANTS["BOTTOM_SHEET"]}
      {...rest}
    >
      <Section
        element = "div"
        className = {clsx("h-full rounded-t-xl animate-bottom-sheet p-4", className)}
        hasRounded = {false}
        hasShadow
      >
        {useCloseBtn ? (
          <div className = "flex mb-4">
            <button className = "ml-auto" onClick = {onClose} aria-label = "창 닫기">
              {CloseIcon}
            </button>
          </div>
        ) : null}
        {children}
      </Section>
    </ModalBase>
  );
});

export default BottomSheet;
