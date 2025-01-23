import { forwardRef, Ref } from 'react';
import clsx from 'clsx';

import { DropdownFilterItemProps } from './types';
import DropdownBase from '../DropdownBase';

const DropdownFilterItem = forwardRef(
  (
    { className, children, checked, ...props }: DropdownFilterItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <DropdownBase.Item
        ref={ref}
        checked={checked}
        className={clsx('text-body-02-regular', className)}
        {...props}
      >
        {children}
      </DropdownBase.Item>
    );
  },
);

export default DropdownFilterItem;
