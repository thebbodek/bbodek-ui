import { SizeType, VariantsType } from "../types";

export const VARIANTS = {
  PRIMARY: "primary",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  SECONDARY: "secondary",
} as const;

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const LABEL_VARIANTS: Record<VariantsType, string> = {
  [VARIANTS.PRIMARY]: "bg-primary-00 text-primary-03",
  [VARIANTS.ERROR]: "bg-rose-300 bg-opacity-20 text-rose-600",
  [VARIANTS.WARNING]: "bg-amber-300 bg-opacity-20 text-amber-600",
  [VARIANTS.SUCCESS]: "bg-green-300 bg-opacity-20 text-green-600",
  [VARIANTS.SECONDARY]: "bg-gray-02 text-gray-07",
};

export const LABEL_SIZE: Record<SizeType, string> = {
  [SIZE.SMALL]: "text-body-03-regular px-2 py-0.5 rounded-md",
  [SIZE.MEDIUM]: "text-body-02-regular px-2 py-1 rounded-md",
  [SIZE.LARGE]: "text-body-01-regular px-2 py-1 rounded-lg",
};
