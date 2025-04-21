import { forwardRef, Ref } from 'react';
import clsx from 'clsx';

import { DropdownMultipleItemProps } from '@/core/components/Dropdown/DropdownMultiple/types';
import Icon from '@/core/components/Icon';
import DropdownBase from '@/core/components/Dropdown/DropdownBase';

const DropdownMultipleItem = forwardRef(
  (
    { className, children, checked, ...props }: DropdownMultipleItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <DropdownBase.Item
        ref={ref}
        checked={checked}
        className={clsx(
          'text-body-01-regular flex items-center justify-between',
          className,
        )}
        useCloseOnItemClick={false}
        {...props}
      >
        {children}
        {checked && (
          <Icon
            iconKey={'check'}
            className={'text-primary-03 -mt-[2px] shrink-0'}
            weight={'bold'}
          />
        )}
      </DropdownBase.Item>
    );
  },
);

export default DropdownMultipleItem;
