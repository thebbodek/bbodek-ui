import React, { PropsWithChildren } from "react";

const TableHead = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableSectionElement>>) => {
  return (
    <thead
      className = {className}
      {...props}
    >
      {children}
    </thead>
  );
};

export default TableHead;
