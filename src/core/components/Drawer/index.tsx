import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

import ModalBase from '../Modal/ModalBase';
import Section from '../Section';
import Typography from '../Typography';
import { DrawerProps } from './types';
import Icon from '@/core/components/Icon';

const Drawer = forwardRef(
  (
    {
      title,
      titleSub,
      onClose,
      children,
      isOpen,
      useClickOutsideEvent = true,
      ...props
    }: PropsWithChildren<DrawerProps>,
    ref: React.Ref<HTMLDialogElement>,
  ) => {
    const { target, className, ...rest } = props;
    const CloseIcon = <Icon className='text-[2rem]' iconKey='x' />;

    return (
      <ModalBase
        isOpen={isOpen}
        ref={ref}
        target={target ?? 'drawer'}
        useClickOutsideEvent={useClickOutsideEvent}
        variants='drawer'
        {...rest}
      >
        <Section
          className={clsx(
            'animate-drawer safe-area-bottom w-[29.1875rem] bg-white',
            className,
          )}
          element='div'
          hasRounded={false}
          hasShadow
        >
          <header className="flex-v-stack after:bg-gray-02 gap-y-6 px-4 pt-6 after:h-[0.0625rem] after:content-['']">
            <div className='flex items-center justify-between'>
              <div className={clsx(titleSub && 'flex items-center gap-x-2')}>
                <Typography
                  className='text-black'
                  element='strong'
                  text={title}
                  theme='head-01-bold'
                />
                {titleSub && (
                  <Typography
                    color='gray-06'
                    text={titleSub}
                    theme='body-02-regular'
                  />
                )}
              </div>
              <button aria-label='창 닫기' onClick={onClose}>
                {CloseIcon}
              </button>
            </div>
          </header>
          {children}
        </Section>
      </ModalBase>
    );
  },
);

export default Drawer;
