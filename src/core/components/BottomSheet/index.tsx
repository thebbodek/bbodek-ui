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
import IconButton from '@/core/components/Button/IconButton';

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
        target={target ?? 'portal'}
        ref={ref}
        variants={VARIANTS['BOTTOM_SHEET']}
        onClose={onClose}
        useClickOutsideEvent={useClickOutsideEvent}
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
                className={'ml-auto'}
                size={'h-24'}
                backgroundColor={'gray-02'}
                onClick={onClose}
                aria-label='창 닫기'
                icon={
                  <Icon
                    className={'text-gray-07 text-[0.8125rem]'}
                    iconKey={'x'}
                    weight={'bold'}
                  />
                }
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
