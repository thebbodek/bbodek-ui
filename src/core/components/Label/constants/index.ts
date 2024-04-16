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
  [VARIANTS.ERROR]: "bg-rose-100 text-rose-500",
  [VARIANTS.WARNING]: "bg-amber-100 text-amber-500",
  [VARIANTS.SUCCESS]: "bg-green-100 text-green-500",
  [VARIANTS.SECONDARY]: "bg-gray-02 text-gray-06",
};

export const LABEL_SIZE: Record<SizeType, string> = {
  [SIZE.SMALL]: "text-body-03-regular px-1.5 py-0.5 rounded-md",
  [SIZE.MEDIUM]: "text-body-02-regular px-2 py-1 rounded-md",
  [SIZE.LARGE]: "text-body-01-regular px-2 py-1 rounded-lg",
};
