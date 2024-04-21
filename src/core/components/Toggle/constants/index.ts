import { SizeType } from "../types";

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const TOGGLE_CIRCLE_SIZE = {
  [SIZE.SMALL]: "w-[1.25rem] h-[1.25rem]",
  [SIZE.MEDIUM]: "w-[1.5rem] h-[1.5rem]",
  [SIZE.LARGE]: "w-[1.75rem] h-[1.75rem]",
};

export const TOGGLE_SIZE: Record<SizeType, string> = {
  [SIZE.SMALL]: "w-[2.5rem] h-[1.5rem] peer-checked:[&>.circle]:translate-x-[calc(2.5rem-1.25rem)]",
  [SIZE.MEDIUM]: "w-[3rem] h-[1.75rem] peer-checked:[&>.circle]:translate-x-[calc(3rem-1.5rem)]",
  [SIZE.LARGE]: "w-[3.5rem] h-[2rem] peer-checked:[&>.circle]:translate-x-[calc(3.5rem-1.75rem)]",
};

