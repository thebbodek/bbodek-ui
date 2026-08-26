import clsx from 'clsx';
import React, { forwardRef } from 'react';

import TableTabItem from '../TableTabItem';
import { ReturnType, TableTabProps } from './types';

const TableTab = forwardRef(
  (
    { items, ...props }: Omit<TableTabProps, 'ref'>,
    ref: React.Ref<HTMLUListElement>,
  ) => {
    const { className, ...rest } = props;

    return (
      <ul
        className={clsx('border-gray-01 flex border-b', className)}
        ref={ref}
        {...rest}
      >
        {items}
      </ul>
    );
  },
) as unknown as ReturnType;

export default TableTab;

TableTab.Item = TableTabItem;
TableTab.displayName = 'TableTab';
