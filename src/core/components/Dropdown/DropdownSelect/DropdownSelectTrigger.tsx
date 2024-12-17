import clsx from 'clsx';
import { forwardRef } from 'react';

import Typography from '../../Typography';
import DropdownBase from '../DropdownBase';
import { DropdownSelectTriggerProps } from './types';
import Icon from '@/core/components/Icon';

const DropdownSelectTrigger = forwardRef(
  (
    { currentValue, error, ...props }: DropdownSelectTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { className, placeholder, ...rest } = props;
    const showPlaceholder = placeholder && !currentValue;

    return (
      <DropdownBase.Trigger
        ref={ref}
        className={clsx(
          'bbodek-select',
          error ? 'border-error' : 'border-gray-03',
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
                className={clsx(isDisabled && 'mr-[1.725rem]')}
                color={!isDisabled && !showPlaceholder ? 'gray-08' : 'gray-05'}
                text={currentValue ? currentValue : placeholder ?? ''}
              />
              {!isDisabled ? (
                <Icon
                  iconKey={'caret-down'}
                  className={clsx(
                    'text-[1.1rem] text-gray-06',
                    isVisibleContent ? 'rotate-180' : 'rotate-0',
                  )}
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
