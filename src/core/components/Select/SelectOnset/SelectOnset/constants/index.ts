import { VariantsType } from "../types";

export const ONSETS = [ "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" ];

export const VARIANTS = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
} as const;

export const ONSETS_CONTAINER_VARIANTS: Record<VariantsType, string> = {
  [VARIANTS.VERTICAL]: "flex-v-stack",
  [VARIANTS.HORIZONTAL]: "flex-h-stack items-center",
};

export const ONSETS_VARIANTS: Record<VariantsType, string> = {
  [VARIANTS.VERTICAL]: "gap-x-2",
  [VARIANTS.HORIZONTAL]: "gap-x-3",
};

export const SelectOnsetOptions = Object.keys(VARIANTS).map(variants => VARIANTS[variants as keyof typeof VARIANTS]);
