import { SizeType } from "../types";

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const LABEL_SIZE: Record<SizeType, string> = {
  [SIZE.SMALL]: "text-body-03-regular px-2 py-0.5 rounded-md",
  [SIZE.MEDIUM]: "text-body-02-regular px-2 py-1 rounded-md",
  [SIZE.LARGE]: "text-body-01-regular px-2 py-1 rounded-lg",
};
