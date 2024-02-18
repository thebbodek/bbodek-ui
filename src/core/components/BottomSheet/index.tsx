import { X } from "@phosphor-icons/react";
import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import ModalBase from "../Modal/ModalBase";
import { VARIANTS } from "../Modal/ModalBase/constants";
import Section from "../Section";
import { BottomSheetProps } from "./types";

const BottomSheet = forwardRef((
    {
      onClose,
      children,

      ...props
     }: PropsWithChildren<BottomSheetProps>,
     ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { target, className, ...rest } = props;
  const CloseIcon = <X size = "24" fill = "#343330"/>;

  return (
    <ModalBase
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
        <div className = "flex mb-4">
          <button className = "ml-auto" onClick = {onClose} aria-label = "창 닫기">
            {CloseIcon}
          </button>
        </div>
        {children}
      </Section>
    </ModalBase>
  );
});

export default BottomSheet;
