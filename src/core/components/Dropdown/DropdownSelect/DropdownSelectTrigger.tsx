import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownSelectIcon from '@/core/components/Dropdown/DropdownSelect/DropdownSelectIcon';
import Typography from '../../Typography';
import DropdownBase from '../DropdownBase';
import { DropdownSelectTriggerProps } from './types';

const DropdownSelectTrigger = forwardRef(
  (
    { currentValue, error, ...props }: DropdownSelectTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { className, placeholder, ...rest } = props;
    const showPlaceholder = placeholder && !currentValue;
    const label = currentValue ? currentValue : (placeholder ?? '');

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
          const isString = typeof label === 'string';

          return (
            <>
              {isString ? (
                <Typography
                  className={clsx(
                    'block truncate',
                    isDisabled && 'mr-[1.725rem]',
                  )}
                  text={label}
                  title={label}
                  color={
                    !isDisabled && !showPlaceholder ? 'gray-08' : 'gray-05'
                  }
                />
              ) : (
                label
              )}
              {!isDisabled ? (
                <DropdownSelectIcon isVisibleContent={isVisibleContent} />
              ) : null}
            </>
          );
        }}
      </DropdownBase.Trigger>
    );
  },
);

export default DropdownSelectTrigger;
