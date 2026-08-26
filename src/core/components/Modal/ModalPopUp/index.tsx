import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import Section from '../../Section';
import ModalBase from '../ModalBase';
import { VARIANTS } from '../ModalBase/constants';
import { ModalPopUpProps } from './types';
import { ROUNDED } from '@/core/components/Section/constants';

const ModalPopUp = forwardRef(
  (
    {
      isOpen,
      children,
      rounded = ROUNDED['ROUNDED_20'],
      hasRounded = true,
      hasShadow = true,
      useClickOutsideEvent = true,
      ...props
    }: PropsWithChildren<ModalPopUpProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { target, className, ...rest } = props;

    return (
      <ModalBase
        isOpen={isOpen}
        ref={ref}
        target={target ?? 'portal'}
        useClickOutsideEvent={useClickOutsideEvent}
        variants={VARIANTS['MODAL']}
        {...rest}
      >
        <Section
          className={clsx('animate-popup', className)}
          element='div'
          hasRounded={hasRounded}
          hasShadow={hasShadow}
          rounded={rounded}
        >
          {children}
        </Section>
      </ModalBase>
    );
  },
);

export default ModalPopUp;
