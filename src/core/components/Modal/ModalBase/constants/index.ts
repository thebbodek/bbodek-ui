import { VariantsType } from '../types';

export const VARIANTS = {
  MODAL: 'modal',
  DRAWER: 'drawer',
  BOTTOM_SHEET: 'bottomSheet',
} as const;

export const MODAL_CONTENT_POSITION: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: 'fixed flex items-center justify-center z-50',
  [VARIANTS.DRAWER]: 'flex justify-end z-40',
  [VARIANTS.BOTTOM_SHEET]: 'fixed flex justify-center items-end z-50',
} as const;

export const MODAL_DIMMED_COLOR: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: 'bg-[#1018284d]',
  [VARIANTS.DRAWER]: 'bg-[#1018284d]',
  [VARIANTS.BOTTOM_SHEET]: 'bg-[#1018284d]',
} as const;

export const MODAL_CONTENT_SIZE: Record<VariantsType, string> = {
  [VARIANTS.MODAL]: 'h-auto',
  [VARIANTS.DRAWER]: 'h-full',
  [VARIANTS.BOTTOM_SHEET]: 'h-auto safe-area-bottom-pb bg-white',
} as const;
