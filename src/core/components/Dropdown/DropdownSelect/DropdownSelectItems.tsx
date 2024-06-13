import clsx from 'clsx';
import { forwardRef } from 'react';

import DropdownBase from '../DropdownBase';
import { DropdownItemsProps } from '../DropdownBase/types';

const DropdownSelectItems = forwardRef(
  (
    { className, ...props }: DropdownItemsProps,
    ref: React.Ref<HTMLUListElement>,
  ) => {
    return (
      <DropdownBase.Items
        ref={ref}
        className={clsx(
          'flex-v-stack min-w-full gap-y-6 overflow-hidden rounded-xl border border-gray-03 px-3 py-4',
          className,
        )}
        {...props}
      />
    );
  },
);

export default DropdownSelectItems;
