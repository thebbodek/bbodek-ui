import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const Table = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableElement>>) => {
  return (
    <table
      className = {clsx("w-full text-sm", className)}
      {...props}
    >
      {children}
    </table>
  );
};

export default Table;
