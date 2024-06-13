import clsx from 'clsx';
import React, { PropsWithChildren, Ref, forwardRef } from 'react';

const Table = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: PropsWithChildren<React.HTMLAttributes<HTMLTableElement>>,
    ref: Ref<HTMLTableElement>,
  ) => {
    return (
      <table ref={ref} className={clsx('w-full text-sm', className)} {...props}>
        {children}
      </table>
    );
  },
);

export default Table;
