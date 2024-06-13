import clsx from 'clsx';
import { forwardRef, Ref } from 'react';
import { Check } from '@phosphor-icons/react';

import { DropdownSelectItemProps } from '@/core/components/Dropdown/DropdownSelect/types';

const DropdownMultipleItem = forwardRef(
  (
    { className, children, checked, ...props }: DropdownSelectItemProps,
    ref: Ref<HTMLLIElement>,
  ) => {
    return (
      <li
        ref={ref}
        role='option'
        className={clsx(
          'flex cursor-pointer items-center justify-between text-body-01-regular text-gray-08 hover:font-bold',
          checked && 'font-bold',
          className,
        )}
        {...props}
      >
        {children}
        <Check
          weight='bold'
          className={clsx(
            '-mt-[2px] flex-shrink-0 text-gray-03',
            checked && 'text-primary-03',
          )}
        />
      </li>
    );
  },
);

export default DropdownMultipleItem;
