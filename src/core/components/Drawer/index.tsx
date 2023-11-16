import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

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
      ...props
     }: PropsWithChildren<DrawerProps>,
     ref: React.Ref<HTMLDialogElement>,
  ) => {
  const { className, ...rest } = props;
  const CloseIcon =
    <svg xmlns = "http://www.w3.org/2000/svg" width = "32" height = "32" viewBox = "0 0 32 32" fill = "none" focusable = "false">
      <path d = "M25.7076 24.2926C25.8005 24.3855 25.8742 24.4958 25.9245 24.6172C25.9747 24.7386 26.0006 24.8687 26.0006 25.0001C26.0006 25.1315 25.9747 25.2616 25.9245 25.383C25.8742 25.5044 25.8005 25.6147 25.7076 25.7076C25.6147 25.8005 25.5044 25.8742 25.383 25.9245C25.2616 25.9747 25.1315 26.0006 25.0001 26.0006C24.8687 26.0006 24.7386 25.9747 24.6172 25.9245C24.4958 25.8742 24.3855 25.8005 24.2926 25.7076L16.0001 17.4138L7.70757 25.7076C7.51993 25.8952 7.26543 26.0006 7.00007 26.0006C6.7347 26.0006 6.48021 25.8952 6.29257 25.7076C6.10493 25.5199 5.99951 25.2654 5.99951 25.0001C5.99951 24.7347 6.10493 24.4802 6.29257 24.2926L14.5863 16.0001L6.29257 7.70757C6.10493 7.51993 5.99951 7.26543 5.99951 7.00007C5.99951 6.7347 6.10493 6.48021 6.29257 6.29257C6.48021 6.10493 6.7347 5.99951 7.00007 5.99951C7.26543 5.99951 7.51993 6.10493 7.70757 6.29257L16.0001 14.5863L24.2926 6.29257C24.4802 6.10493 24.7347 5.99951 25.0001 5.99951C25.2654 5.99951 25.5199 6.10493 25.7076 6.29257C25.8952 6.48021 26.0006 6.7347 26.0006 7.00007C26.0006 7.26543 25.8952 7.51993 25.7076 7.70757L17.4138 16.0001L25.7076 24.2926Z" fill = "#343330"/>
    </svg>;

  return (
    <ModalBase
      ref = {ref}
      variants = {"drawer"}
      onClose = {onClose}
      {...rest}
    >
      <Section
        element = "div"
        className = {clsx("w-[29.1875rem] h-full animate-drawer", className)}
        hasRounded = {false}
        hasShadow
      >
        <header className = "flex-v-stack gap-y-6 pt-6 pl-6 pr-4 after:content-[''] after:h-[0.0625rem] after:bg-gray-02">
          <div className = "flex items-center justify-between">
            <div className = {clsx(titleSub && "flex items-center gap-x-2")}>
              <Typography element = "strong" theme = "head-01-bold" className = "text-[#000]" text = {title} />
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
