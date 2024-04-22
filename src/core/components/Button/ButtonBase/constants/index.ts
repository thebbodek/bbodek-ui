import { ColorThemeType, GapType, RoundedType, SizeType } from "../types";

export const SIZE = {
  SIZE_60: "h-60",
  SIZE_56: "h-56",
  SIZE_52: "h-52",
  SIZE_49: "h-49",
  SIZE_48: "h-48",
  SIZE_40: "h-40",
  SIZE_29: "h-29",
  SIZE_24: "h-24",
  SIZE_20: "h-20",
} as const;

export const ROUNDED = {
  ROUNDED_FULL: "rounded-full",
  ROUNDED_12: "rounded-12",
  ROUNDED_2: "rounded-2",
} as const;

export const GAP = {
  GAP_12: "gap-12",
  GAP_10: "gap-10",
  GAP_8: "gap-8",
} as const;

export const COLOR_THEME = {
  PRIMARY: "primary",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  SECONDARY: "secondary",
  GRAY: "gray",
  WHITE: "white",
} as const;

export const BUTTON_SIZE: Record<SizeType, string> = {
  [SIZE.SIZE_60]: "h-[3.75rem]",
  [SIZE.SIZE_56]: "h-14",
  [SIZE.SIZE_52]: "h-[3.25rem]",
  [SIZE.SIZE_49]: "h-[3.0625rem]",
  [SIZE.SIZE_48]: "h-12",
  [SIZE.SIZE_40]: "h-10",
  [SIZE.SIZE_29]: "h-[1.8125rem]",
  [SIZE.SIZE_24]: "h-6",
  [SIZE.SIZE_20]: "h-5",
};

export const BUTTON_ROUNDED: Record<RoundedType, string> = {
  [ROUNDED["ROUNDED_FULL"]]: "rounded-full",
  [ROUNDED.ROUNDED_12]: "rounded-xl",
  [ROUNDED.ROUNDED_2]: "rounded-sm",
};

export const BUTTON_GAP: Record<GapType, string> = {
  [GAP.GAP_12]: "gap-x-3",
  [GAP.GAP_10]: "gap-x-2.5",
  [GAP.GAP_8]: "gap-x-2",
};

export const BUTTON_COLOR_THEME: Record<ColorThemeType, string> = {
  [COLOR_THEME["PRIMARY"]]: "bg-primary-03 text-white",
  [COLOR_THEME["SECONDARY"]]: "text-primary-03 bg-primary-00",
  [COLOR_THEME["ERROR"]]: "text-rose-600 bg-rose-300/20",
  [COLOR_THEME["WARNING"]]: "text-amber-600 bg-amber-300/20",
  [COLOR_THEME["SUCCESS"]]: "text-green-600 bg-green-300/20",
  [COLOR_THEME["GRAY"]]: "text-gray-07 bg-gray-02",
  [COLOR_THEME["WHITE"]]: "text-gray-06 bg-white border border-gray-03",
};
