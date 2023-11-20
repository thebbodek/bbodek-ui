import React, { createContext } from "react";
import clsx from "clsx";

import { TableContainerProps } from "./types";
import { ThemeType } from "./types";
import { THEME } from "./constants";

export const TableThemeContext = createContext<{ theme: ThemeType }>({ theme: THEME.WHITE });
const TableContainer = ({
  children,
  theme = "white",
  className,
}: TableContainerProps) => {
  return (
    <TableThemeContext.Provider value = {{ theme }}>
      <div
        className = {clsx(
          "w-full overflow-x-auto",
          className,
        )}
      >
        {children}
      </div>
    </TableThemeContext.Provider>
  );
};

export default TableContainer;
