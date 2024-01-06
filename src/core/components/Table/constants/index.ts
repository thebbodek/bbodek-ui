import { TableCellType, ThemeType } from "../types";

export const THEME = {
  WHITE: "white",
  GRAY: "gray",
} as const;

export const TABLE_CELL = {
  TH: "th",
  TD: "td",
} as const;

export const TR_THEME: Record<ThemeType, string> = {
  [THEME.WHITE]: "hover:bg-white",
  [THEME.GRAY]: "hover:bg-gray-01",
} as const;

export const COMMON_CELL_STYLE = "py-4 px-6 font-normal";

export const TABLE_CELL_THEME: Record<ThemeType, Record<TableCellType, string>> = {
  [THEME.WHITE]: {
    [TABLE_CELL.TH]: `${COMMON_CELL_STYLE} bg-white text-gray-07`,
    [TABLE_CELL.TD]: `${COMMON_CELL_STYLE} text-gray-07`,
  },
  [THEME.GRAY]: {
    [TABLE_CELL.TH]: `${COMMON_CELL_STYLE} bg-gray-03 text-gray-07`,
    [TABLE_CELL.TD]: `${COMMON_CELL_STYLE} text-gray-07`,
  },
} as const;
