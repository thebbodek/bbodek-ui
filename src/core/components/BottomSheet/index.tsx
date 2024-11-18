import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import { useBlockScrollingEffect } from '@/hooks/effects/useBlockScrollingEffect';
import ModalBase from '../Modal/ModalBase';
import { VARIANTS } from '../Modal/ModalBase/constants';
import Section from '../Section';
import { BottomSheetProps } from './types';
import useClickOutside from '@/hooks/useClickOutSide';
import Icon from '@/core/components/Icon';

const BottomSheet = forwardRef(
  (
    {
      onClose,
      children,
      isOpen,
      useCloseBtn = false,
      ...props
    }: PropsWithChildren<BottomSheetProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { contentRef } = useClickOutside<HTMLDivElement>(onClose);
    const { target, className, ...rest } = props;
    const CloseIcon = <Icon className={'text-[1.5rem]'} iconKey={'x'} />;

    useBlockScrollingEffect(isOpen);

    return (
      <ModalBase
        isOpen={isOpen}
        target={target ?? 'portal'}
        ref={ref}
        variants={VARIANTS['BOTTOM_SHEET']}
        {...rest}
      >
        <Section
          element='div'
          className={clsx(
            'h-full animate-bottom-sheet rounded-t-xl p-4',
            className,
          )}
          ref={contentRef}
          hasRounded={false}
          hasShadow
        >
          {useCloseBtn ? (
            <div className='mb-4 flex'>
              <button
                className='ml-auto'
                onClick={onClose}
                aria-label='창 닫기'
              >
                {CloseIcon}
              </button>
            </div>
          ) : null}
          {children}
        </Section>
      </ModalBase>
    );
  },
);

export default BottomSheet;
