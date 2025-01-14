import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import { DropdownMultipleItemProps } from '@/core/components/Dropdown/DropdownMultiple/types';
import Icon from '@/core/components/Icon';

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
            'flex items-center justify-between text-body-01-regular transition-colors hover:text-primary-03',
            checked ? 'text-primary-03' : 'text-gray-08',
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
          <Icon
            iconKey={'check'}
            className={
              '-mt-[2px] flex-shrink-0 text-gray-03 peer-checked:text-primary-03'
            }
            weight={'bold'}
          />
        </label>
      </li>
    );
  },
);

export default DropdownMultipleItem;
