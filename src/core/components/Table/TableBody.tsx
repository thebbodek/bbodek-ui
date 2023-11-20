import React, { PropsWithChildren } from "react";

const TableBody = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => {
  return (
    <tbody
      className = {className}
      {...props}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
