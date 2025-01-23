import { forwardRef, PropsWithChildren, Ref } from 'react';
import clsx from 'clsx';

import { DropdownSelectItemProps } from './types';
import DropdownBase from '../DropdownBase';

const DropdownSelectItem = forwardRef(
  (
    {
      className,
      children,
      checked,
      ...props
    }: PropsWithChildren<DropdownSelectItemProps>,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <DropdownBase.Item
        ref={ref}
        checked={checked}
        className={clsx('text-body-01-regular', className)}
        {...props}
      >
        {children}
      </DropdownBase.Item>
    );
  },
);

export default DropdownSelectItem;
