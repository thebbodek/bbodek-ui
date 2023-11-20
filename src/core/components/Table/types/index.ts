import { THEME, TABLE_CELL } from "../constants";

export type ThemeType = typeof THEME[keyof typeof THEME];
export type TableCellType = typeof TABLE_CELL[keyof typeof TABLE_CELL];

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeType;
}
