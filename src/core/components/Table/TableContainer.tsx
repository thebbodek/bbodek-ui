import clsx from "clsx";
import { createContext, forwardRef, Ref } from "react";

import { THEME } from "./constants";
import { TableContainerProps, ThemeType } from "./types";

export const TableThemeContext = createContext<{ theme: ThemeType }>({ theme: THEME.WHITE });

const TableContainer = forwardRef((
  {
    children,
    theme = "white",
    className,
  }: TableContainerProps,
  ref: Ref<HTMLDivElement>,
) => {
  return (
    <TableThemeContext.Provider value = {{ theme }}>
      <div
        ref = {ref}
        className = {clsx(
          "w-full overflow-x-auto",
          className,
        )}
      >
        {children}
      </div>
    </TableThemeContext.Provider>
  );
});

export default TableContainer;
