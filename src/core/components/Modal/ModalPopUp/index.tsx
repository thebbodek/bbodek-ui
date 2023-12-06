import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import { useBlockScrollingEffect } from "@/hooks/effects/useBlockScrollingEffect";
import Section from "../../Section";
import ModalBase from "../ModalBase";
import { ModalPopUpProps } from "./types";

const ModalPopUp = forwardRef((
    {
      isOpen,
      children,
      ...props
    }: PropsWithChildren<ModalPopUpProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { target, className, ...rest } = props;

  useBlockScrollingEffect(isOpen);

  return (
    <ModalBase
      target = {target ?? "modal"}
      ref = {ref}
      variants = "modal"
      isOpen = {isOpen}
      {...rest}
    >
      <Section
        element = "div"
        className = {clsx("animate-popup", className)}
        hasShadow
      >
        {children}
      </Section>
    </ModalBase>
  );
});

export default ModalPopUp;
