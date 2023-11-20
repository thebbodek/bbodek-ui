import React, { PropsWithChildren } from "react";
import clsx from "clsx";

const Table = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableElement>>) => {
  return (
    <table
      className = {clsx("text-sm", className)}
      {...props}
    >
      {children}
    </table>
  );
};

export default Table;
