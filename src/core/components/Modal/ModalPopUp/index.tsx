import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import { useBlockScrollingEffect } from "@/hooks/effects/useBlockScrollingEffect";
import Section from "../../Section";
import ModalBase from "../ModalBase";
import { VARIANTS } from "../ModalBase/constants";
import { ModalPopUpProps } from "./types";

const ModalPopUp = forwardRef((
    {
      isOpen,
      children,
      hasRounded = true,
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
      variants = {VARIANTS["MODAL"]}
      isOpen = {isOpen}
      {...rest}
    >
      <Section
        element = "div"
        className = {clsx("animate-popup", className)}
        hasRounded = {hasRounded}
        hasShadow
      >
        {children}
      </Section>
    </ModalBase>
  );
});

export default ModalPopUp;
