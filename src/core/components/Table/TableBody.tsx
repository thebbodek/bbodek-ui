import React, { PropsWithChildren, Ref, forwardRef } from 'react';

const TableBody = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>,
    ref: Ref<HTMLTableSectionElement>,
  ) => {
    return (
      <tbody ref={ref} className={className} {...props}>
        {children}
      </tbody>
    );
  },
);

export default TableBody;
