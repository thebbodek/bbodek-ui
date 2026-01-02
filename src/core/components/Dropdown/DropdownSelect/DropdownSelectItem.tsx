import clsx from 'clsx';
import { forwardRef, PropsWithChildren, Ref } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownSelectItemProps } from './types';

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
