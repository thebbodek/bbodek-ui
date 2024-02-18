import { X } from "@phosphor-icons/react";
import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

import { useBlockScrollingEffect } from "@/hooks/effects/useBlockScrollingEffect";
import ModalBase from "../Modal/ModalBase";
import Section from "../Section";
import Typography from "../Typography";
import { DrawerProps } from "./types";

const Drawer = forwardRef((
    {
      title,
      titleSub,
      onClose,
      children,
      isOpen,
      ...props
     }: PropsWithChildren<DrawerProps>,
     ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { target, className, ...rest } = props;
  const CloseIcon = <X size = "32" fill = "#343330"/>;

  useBlockScrollingEffect(isOpen);

  return (
    <ModalBase
      target = {target ?? "drawer"}
      ref = {ref}
      variants = {"drawer"}
      isOpen = {isOpen}
      {...rest}
    >
      <Section
        element = "div"
        className = {clsx("w-[29.1875rem] h-full animate-drawer", className)}
        hasRounded = {false}
        hasShadow
      >
        <header className = "flex-v-stack gap-y-6 pt-6 px-4 after:content-[''] after:h-[0.0625rem] after:bg-gray-02">
          <div className = "flex items-center justify-between">
            <div className = {clsx(titleSub && "flex items-center gap-x-2")}>
              <Typography element = "strong" theme = "head-01-bold" className = "text-black" text = {title} />
              {titleSub && <Typography theme = "body-02-regular" color = "gray-06" text = {titleSub} />}
            </div>
            <button onClick = {onClose} aria-label = "창 닫기">
              {CloseIcon}
            </button>
          </div>
        </header>
        {children}
      </Section>
    </ModalBase>
  );
});

export default Drawer;
