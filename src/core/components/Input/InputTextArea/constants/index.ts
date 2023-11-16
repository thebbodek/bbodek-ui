import { TextAreaSizeType } from "../types";

export const SIZE = {
  SIZE_213: "h-213",
  SIZE_314: "h-314",
} as const;

export const TEXT_AREA_HEIGHT: Record<TextAreaSizeType, string> = {
  [SIZE.SIZE_213]: "h-[13.3125rem]",
  [SIZE.SIZE_314]: "h-[19.625rem]",
};

export const TextAreaSizeOptions = Object.keys(SIZE).map(color => SIZE[color as keyof typeof SIZE]);
