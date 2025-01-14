import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownItemsProps } from '../DropdownBase/types';

const DropdownFilterItems = forwardRef(
  (
    { className, ...props }: DropdownItemsProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <DropdownBase.Items
        ref={ref}
        className={clsx('bbodek-field-padding gap-y-1.5', className)}
        {...props}
      />
    );
  },
);

export default DropdownFilterItems;
