import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownItemsProps } from '../DropdownBase/types';

const DropdownSelectItems = forwardRef(
  (
    { className, ...props }: DropdownItemsProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <DropdownBase.Items
        ref={ref}
        className={clsx('bbodek-field-padding gap-y-2', className)}
        {...props}
      />
    );
  },
);

export default DropdownSelectItems;
