import clsx from 'clsx';
import { forwardRef, Ref } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownFilterItemProps } from './types';

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
