import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import { Check } from '@phosphor-icons/react';

import { DropdownMultipleItemProps } from '@/core/components/Dropdown/DropdownMultiple/types';

const DropdownMultipleItem = forwardRef(
  (
    {
      className,
      children,
      checked,
      disabled,
      readOnly,
      ...props
    }: DropdownMultipleItemProps,
    ref: ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();
    const isDisabled = disabled || readOnly;

    return (
      <li role='option'>
        <label
          htmlFor={id}
          className={clsx(
            'flex items-center justify-between text-body-01-regular text-gray-08 hover:font-bold',
            checked && 'font-bold',
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
            className,
          )}
        >
          {children}
          <input
            ref={ref}
            id={id}
            checked={checked}
            type='checkbox'
            className='peer hidden'
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
          <Check
            weight='bold'
            className={clsx(
              '-mt-[2px] flex-shrink-0 text-gray-03 peer-checked:text-primary-03',
            )}
          />
        </label>
      </li>
    );
  },
);

export default DropdownMultipleItem;
