import React, { PropsWithChildren, Ref, forwardRef } from 'react';

const TableHead = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>,
    ref: Ref<HTMLTableSectionElement>,
  ) => {
    return (
      <thead ref={ref} className={className} {...props}>
        {children}
      </thead>
    );
  },
);

export default TableHead;
