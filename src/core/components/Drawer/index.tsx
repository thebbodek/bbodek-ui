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
    const CloseIcon = <Icon className={'text-[2rem]'} iconKey={'x'} />;

    return (
      <ModalBase
        target={target ?? 'drawer'}
        ref={ref}
        variants={'drawer'}
        isOpen={isOpen}
        useClickOutsideEvent={useClickOutsideEvent}
        {...rest}
      >
        <Section
          element='div'
          className={clsx('h-full w-[29.1875rem] animate-drawer', className)}
          hasRounded={false}
          hasShadow
        >
          <header className="flex-v-stack gap-y-6 px-4 pt-6 after:h-[0.0625rem] after:bg-gray-02 after:content-['']">
            <div className='flex items-center justify-between'>
              <div className={clsx(titleSub && 'flex items-center gap-x-2')}>
                <Typography
                  element='strong'
                  theme='head-01-bold'
                  className='text-black'
                  text={title}
                />
                {titleSub && (
                  <Typography
                    theme='body-02-regular'
                    color='gray-06'
                    text={titleSub}
                  />
                )}
              </div>
              <button onClick={onClose} aria-label='창 닫기'>
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
