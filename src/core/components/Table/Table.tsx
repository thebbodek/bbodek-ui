import clsx from 'clsx';
import React, { forwardRef, PropsWithChildren, Ref } from 'react';

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
      <table className={clsx('w-full text-sm', className)} ref={ref} {...props}>
        {children}
      </table>
    );
  },
);

export default Table;
