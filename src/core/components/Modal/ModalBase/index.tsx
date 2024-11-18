import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import useClickOutside from '@/hooks/useClickOutSide';
import {
  MODAL_CONTENT_POSITION,
  MODAL_CONTENT_SIZE,
  MODAL_DIMMED_COLOR,
} from './constants';
import { ModalBaseProps } from './types';
import Portal from '@/core/components/Portal';

const ModalBase = forwardRef(
  (
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
      <Portal target={target}>
        <dialog
          ref={ref}
          className={clsx(
            'h-full w-full overflow-hidden open:animate-fade-in',
            MODAL_CONTENT_POSITION[variants],
            dimmed && MODAL_DIMMED_COLOR[variants],
            className,
          )}
          open={isOpen}
          {...rest}
        >
          <div ref={contentRef} className={MODAL_CONTENT_SIZE[variants]}>
            {children}
          </div>
        </dialog>
      </Portal>
    );
  },
);

export default ModalBase;
