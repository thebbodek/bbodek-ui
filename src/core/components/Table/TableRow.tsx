import clsx from 'clsx';
import React, { forwardRef, PropsWithChildren, Ref, useContext } from 'react';

import { TR_THEME } from './constants';
import { TableThemeContext } from './TableContainer';

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
