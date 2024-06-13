import clsx from 'clsx';
import React, { PropsWithChildren, Ref, forwardRef, useContext } from 'react';

import { TableThemeContext } from './TableContainer';
import { TR_THEME } from './constants';

const TableRow = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: PropsWithChildren<React.HTMLAttributes<HTMLTableRowElement>>,
    ref: Ref<HTMLTableRowElement>,
  ) => {
    const { theme } = useContext(TableThemeContext);
    return (
      <tr ref={ref} className={clsx(TR_THEME[theme], className)} {...props}>
        {children}
      </tr>
    );
  },
);

export default TableRow;
