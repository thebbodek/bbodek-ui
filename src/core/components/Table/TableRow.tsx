import React, { PropsWithChildren, useContext } from "react";
import clsx from "clsx";

import { TableThemeContext } from "./TableContainer";
import { TR_THEME } from "./constants";

const TableRow = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLTableRowElement>>) => {
  const { theme } = useContext(TableThemeContext);
  return (
    <tr
      className = {clsx(
        TR_THEME[theme],
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;
