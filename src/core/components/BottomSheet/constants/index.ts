import { ButtonBottomSheetRoundedTypes } from '@/core/components/BottomSheet/types';

export const BOTTOM_SHEET_ROUNDED_VARIANTS = {
  ROUNDED_FULL: 'rounded-full',
  ROUNDED_12: 'rounded-12',
  ROUNDED_8: 'rounded-8',
  ROUNDED_6: 'rounded-6',
  ROUNDED_4: 'rounded-4',
  ROUNDED_2: 'rounded-2',
} as const;

export const BOTTOM_SHEET_ROUNDED_VARIANTS_MAPPER: Record<
  ButtonBottomSheetRoundedTypes,
  string
> = {
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_FULL']]: 'rounded-t-full',
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_12']]: 'rounded-t-xl',
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_8']]: 'rounded-t-lg',
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_6']]: 'rounded-t-md',
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_4']]: 'rounded-t',
  [BOTTOM_SHEET_ROUNDED_VARIANTS['ROUNDED_2']]: 'rounded-t-sm',
};
