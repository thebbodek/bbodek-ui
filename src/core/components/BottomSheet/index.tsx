import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import ModalBase from '../Modal/ModalBase';
import { VARIANTS } from '../Modal/ModalBase/constants';
import { BottomSheetProps } from './types';
import Icon from '@/core/components/Icon';
import {
  BOTTOM_SHEET_ROUNDED_VARIANTS,
  BOTTOM_SHEET_ROUNDED_VARIANTS_MAPPER,
} from '@/core/components/BottomSheet/constants';

const BottomSheet = forwardRef(
  (
    {
      onClose,
      children,
      isOpen,
      useCloseBtn = false,
      useClickOutsideEvent = true,
      rounded = BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_12'],
      ...props
    }: PropsWithChildren<BottomSheetProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { target, className, ...rest } = props;
    const CloseIcon = <Icon className={'text-[1.5rem]'} iconKey={'x'} />;

    return (
      <ModalBase
        isOpen={isOpen}
        target={target ?? 'portal'}
        ref={ref}
        variants={VARIANTS['BOTTOM_SHEET']}
        onClose={onClose}
        useClickOutsideEvent={useClickOutsideEvent}
        {...rest}
      >
        <div
          className={clsx(
            'animate-bottom-sheet overflow-y-hidden',
            BOTTOM_SHEET_ROUNDED_VARIANTS_MAPPER[rounded],
          )}
        >
          <div className={clsx('p-4', className)}>
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
          </div>
        </div>
      </ModalBase>
    );
  },
);

export default BottomSheet;
