import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import ModalBase from '../Modal/ModalBase';
import { VARIANTS } from '../Modal/ModalBase/constants';
import { BottomSheetProps } from './types';
import {
  BOTTOM_SHEET_ROUNDED_VARIANTS,
  BOTTOM_SHEET_ROUNDED_VARIANTS_MAPPER,
} from '@/core/components/BottomSheet/constants';
import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';

const BottomSheet = forwardRef(
  (
    {
      onClose,
      children,
      isOpen,
      useCloseBtn = false,
      useClickOutsideEvent = true,
      rounded = BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_12'],
      isFullScreen = false,
      ...props
    }: PropsWithChildren<BottomSheetProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { target, className, ...rest } = props;

    return (
      <ModalBase
        isOpen={isOpen}
        ref={ref}
        target={target ?? 'portal'}
        useClickOutsideEvent={useClickOutsideEvent}
        variants={VARIANTS['BOTTOM_SHEET']}
        onClose={onClose}
        {...rest}
      >
        <div
          className={clsx(
            'animate-bottom-sheet safe-area-bottom overflow-y-hidden bg-white',
            !isFullScreen && BOTTOM_SHEET_ROUNDED_VARIANTS_MAPPER[rounded],
          )}
        >
          <div className={clsx('p-4', isFullScreen && 'h-[100svh]', className)}>
            {useCloseBtn ? (
              <IconButton
                icon={
                  <Icon
                    className='text-gray-07 text-[0.8125rem]'
                    iconKey='x'
                    weight='bold'
                  />
                }
                aria-label='창 닫기'
                backgroundColor='gray-02'
                className='ml-auto'
                size='h-24'
                onClick={onClose}
              />
            ) : null}
            {children}
          </div>
        </div>
      </ModalBase>
    );
  },
);

export default BottomSheet;
