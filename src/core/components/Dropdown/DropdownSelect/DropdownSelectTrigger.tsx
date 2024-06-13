import { CaretDown } from '@phosphor-icons/react';
import clsx from 'clsx';
import { forwardRef } from 'react';

import Typography from '../../Typography';
import DropdownBase from '../DropdownBase';
import { DropdownSelectTriggerProps } from './types';

const DropdownSelectTrigger = forwardRef(
  (
    { currentValue, ...props }: DropdownSelectTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { className, placeholder, ...rest } = props;
    const showPlaceholder = placeholder && !currentValue;

    return (
      <DropdownBase.Trigger
        ref={ref}
        className={clsx(
          'flex h-[3.75rem] w-full items-center justify-between gap-x-2 overflow-hidden rounded-xl border border-gray-03 p-3',
          className,
        )}
        {...rest}
      >
        {({ isToggle, disabled, readOnly }) => {
          const isDisabled = readOnly || disabled;
          const isVisibleContent = !readOnly && !disabled && isToggle;

          return (
            <>
              <Typography
                theme='subhead-02-regular'
                className={clsx(isDisabled && 'mr-[1.75rem]')}
                color={!isDisabled && !showPlaceholder ? 'gray-08' : 'gray-05'}
                text={currentValue ? currentValue : placeholder ?? ''}
              />
              {!isDisabled ? (
                <CaretDown
                  size='24'
                  className={clsx(
                    'text-gray-06',
                    isVisibleContent ? 'rotate-180' : 'rotate-0',
                  )}
                  weight='fill'
                />
              ) : null}
            </>
          );
        }}
      </DropdownBase.Trigger>
    );
  },
);

export default DropdownSelectTrigger;
