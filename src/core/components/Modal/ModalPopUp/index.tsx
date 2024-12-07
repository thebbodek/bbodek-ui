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
        target={target ?? 'portal'}
        ref={ref}
        variants={VARIANTS['MODAL']}
        useClickOutsideEvent={useClickOutsideEvent}
        isOpen={isOpen}
        {...rest}
      >
        <Section
          element='div'
          className={clsx('animate-popup', className)}
          rounded={rounded}
          hasRounded={hasRounded}
          hasShadow={hasShadow}
        >
          {children}
        </Section>
      </ModalBase>
    );
  },
);

export default ModalPopUp;
