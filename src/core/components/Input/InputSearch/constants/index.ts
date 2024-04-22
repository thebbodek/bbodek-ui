import { RoundedType } from "../types";

export const ROUNDED = {
  ROUNDED_FULL: "rounded-full",
  ROUNDED_12: "rounded-12",
  ROUNDED_8: "rounded-8",
  ROUNDED_4: "rounded-4",
} as const;

export const INPUT_SEARCH_ROUNDED: Record<RoundedType, string> = {
  [ROUNDED["ROUNDED_FULL"]]: "rounded-full",
  [ROUNDED["ROUNDED_12"]]: "rounded-xl",
  [ROUNDED["ROUNDED_8"]]: "rounded-lg",
  [ROUNDED["ROUNDED_4"]]: "rounded",
};
