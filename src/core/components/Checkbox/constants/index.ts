import { SvgSizeType } from "../types";

export const SVG_SIZE = {
  SIZE_32: "size-32",
  SIZE_24: "size-24",
} as const;

export const CHECKBOX_SVG_SIZE: Record<SvgSizeType, string> = {
  [SVG_SIZE.SIZE_32]: "w-8 h-8",
  [SVG_SIZE.SIZE_24]: "w-6 h-6",
};
