import { RoundedType } from '../types';

export const ROUNDED = {
  ROUNDED_FULL: 'rounded-full',
  ROUNDED_20: 'rounded-20',
  ROUNDED_12: 'rounded-12',
  ROUNDED_8: 'rounded-8',
  ROUNDED_6: 'rounded-6',
  ROUNDED_2: 'rounded-2',
} as const;

export const SECTION_ROUNDED: Record<RoundedType, string> = {
  [ROUNDED['ROUNDED_FULL']]: 'rounded-full',
  [ROUNDED['ROUNDED_20']]: 'rounded-[1.25rem]',
  [ROUNDED['ROUNDED_12']]: 'rounded-xl',
  [ROUNDED['ROUNDED_8']]: 'rounded-lg',
  [ROUNDED['ROUNDED_6']]: 'rounded-md',
  [ROUNDED['ROUNDED_2']]: 'rounded-sm',
};
