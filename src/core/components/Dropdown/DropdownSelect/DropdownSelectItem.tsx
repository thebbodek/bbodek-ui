import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownSelectItemProps } from './types';

const DropdownSelectItem = forwardRef(
  (
    { className, children, checked, ...props }: DropdownSelectItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {
    return (
      <DropdownBase.Item
        ref={ref}
        className={clsx(
          'text-body-01-regular hover:text-primary-03',
          checked ? 'text-primary-03' : 'text-gray-08',
          className,
        )}
        {...props}
      >
        {children}
      </DropdownBase.Item>
    );
  },
);

export default DropdownSelectItem;
