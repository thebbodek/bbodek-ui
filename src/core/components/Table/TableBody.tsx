import React, { forwardRef, PropsWithChildren, Ref } from 'react';

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
      <tbody className={className} ref={ref} {...props}>
        {children}
      </tbody>
    );
  },
);

export default TableBody;
