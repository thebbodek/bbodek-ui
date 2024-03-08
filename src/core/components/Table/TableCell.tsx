import clsx from "clsx";
import React, { PropsWithChildren, useContext } from "react";

import { TableThemeContext } from "./TableContainer";
import { TABLE_CELL_THEME } from "./constants";
import { TableCellProps, TableCellType } from "./types";

const TableCell = <T extends TableCellType = "td">({
  children,
  element: Element,
  ...props
}: PropsWithChildren<TableCellProps<T>> & React.ComponentPropsWithoutRef<T>) => {
  const { theme } = useContext(TableThemeContext);
  const { className, ...rest } = props;
  const Component: React.ElementType = Element;
  const componentStyle = TABLE_CELL_THEME[theme][Element];

  return (
    <>
      <Component
        className = {clsx(
          componentStyle,
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    </>
  );
};

export default TableCell;
