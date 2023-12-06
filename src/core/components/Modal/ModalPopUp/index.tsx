import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import Section from "../../Section";
import ModalBase from "../ModalBase";
import { ModalPopUpProps } from "./types";

const ModalPopUp = forwardRef((
    {
      children,
      ...props
    }: PropsWithChildren<ModalPopUpProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { target, className, ...rest } = props;

  return (
    <ModalBase
      target = {target ?? "modal"}
      ref = {ref}
      variants = "modal"
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
