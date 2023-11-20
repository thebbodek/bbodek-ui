import { RoundedType, SizeType, VariantsType } from "../types";

export const VARIANTS = {
  PRIMARY: "primary",
  ERROR: "error",
  BORDER: "border",
} as const;

export const SIZE = {
  SIZE_44: "h-44",
  SIZE_40: "h-40",
  SIZE_29: "h-29",
} as const;

export const ROUNDED = {
  ROUNDED_12: "rounded-12",
  ROUNDED_8: "rounded-8",
} as const;

export const LABEL_VARIANTS: Record<VariantsType, string> = {
  [VARIANTS.PRIMARY]: "bg-primary-00 text-primary-03",
  [VARIANTS.ERROR]: "bg-[#ff526033] text-error",
  [VARIANTS.BORDER]: "bg-transparent text-primary-03 border border-primary-01",
};

export const LABEL_SIZE: Record<SizeType, string> = {
  [SIZE.SIZE_44]: "h-11 py-2.5",
  [SIZE.SIZE_40]: "h-10 py-2",
  [SIZE.SIZE_29]: "h-[1.8125rem] py-1",
};

export const LABEL_ROUNDED: Record<RoundedType, string> = {
  [ROUNDED.ROUNDED_12]: "rounded-xl",
  [ROUNDED.ROUNDED_8]: "rounded-lg",
};
