import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownFilterItemProps } from './types';

const DropdownFilterItem = forwardRef(
  (
    { className, children, checked, ...props }: DropdownFilterItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {
    return (
      <DropdownBase.Item
        ref={ref}
        className={clsx(
          'text-body-02-regular transition-colors hover:text-primary-03',
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

export default DropdownFilterItem;
