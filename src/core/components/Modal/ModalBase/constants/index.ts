import { VariantsType } from "../types";

export const VARIANTS = {
  MODAL: "modal",
  DRAWER: "drawer",
} as const;

export const MODAL_CONTENT_POSITION: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: "fixed flex items-center justify-center",
  [VARIANTS.DRAWER]: "flex justify-end",
} as const;

export const MODAL_DIMMED_COLOR: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: "bg-[#1018284d]",
  [VARIANTS.DRAWER]: "bg-[#f8faffcc]",
} as const;

export const MODAL_CONTENT_SIZE: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: "h-auto",
  [VARIANTS.DRAWER]: "h-full",
} as const;

