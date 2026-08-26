import React, { forwardRef, PropsWithChildren, Ref } from 'react';

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
      <thead className={className} ref={ref} {...props}>
        {children}
      </thead>
    );
  },
);

export default TableHead;
