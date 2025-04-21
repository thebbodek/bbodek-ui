import clsx from 'clsx';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';

import Portal from '@/core/components/Portal';
import { useBlockScrollingEffect } from '@/hooks/effects/useBlockScrollingEffect';
import useClickOutside from '@/hooks/useClickOutSide';
import {
  MODAL_CONTENT_POSITION,
  MODAL_CONTENT_SIZE,
  MODAL_DIMMED_COLOR,
  VARIANTS,
} from './constants';
import { ModalBaseProps } from './types';

const ModalBase = forwardRef(
  (
    {
      target,
      variants,
      isOpen,
      dimmed = true,
      onClose,
      children,
      useClickOutsideEvent = true,
      ...props
    }: PropsWithChildren<ModalBaseProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { contentRef } = useClickOutside<HTMLDivElement>(
      onClose,
      useClickOutsideEvent,
    );
    const { className, ...rest } = props;

    useBlockScrollingEffect(isOpen);

    if (!isOpen || !children) return null;

    const isReactElement = (children: unknown): children is ReactElement => {
      return isValidElement(children);
    };

    const _children = isReactElement(children) ? (
      children
    ) : (
      <div>{children}</div>
    );

    return (
      <Portal target={target}>
        <dialog
          ref={ref}
          className={clsx(
            'open:animate-fade-in top-0 left-0 h-full w-full overflow-hidden',
            variants === VARIANTS['MODAL'] && 'safe-area-bottom',
            MODAL_CONTENT_POSITION[variants],
            dimmed && MODAL_DIMMED_COLOR[variants],
            className,
          )}
          open={isOpen}
          {...rest}
        >
          {cloneElement(_children, {
            ref: contentRef,
            className: clsx(
              _children.props.className,
              MODAL_CONTENT_SIZE[variants],
            ),
          })}
        </dialog>
      </Portal>
    );
  },
);

export default ModalBase;
