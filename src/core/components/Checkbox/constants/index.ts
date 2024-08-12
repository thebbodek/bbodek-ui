import { GapType, SvgSizeType } from '../types';

export const SVG_SIZE = {
  SIZE_32: 'size-32',
  SIZE_24: 'size-24',
  SIZE_16: 'size-16',
} as const;

export const GAP = {
  GAP_12: 'gap-12',
  GAP_10: 'gap-10',
  GAP_8: 'gap-8',
  GAP_6: 'gap-6',
  GAP_4: 'gap-4',
} as const;

export const CHECKBOX_SVG_SIZE: Record<SvgSizeType, string> = {
  [SVG_SIZE['SIZE_32']]: 'w-8 h-8',
  [SVG_SIZE['SIZE_24']]: 'w-6 h-6',
  [SVG_SIZE['SIZE_16']]: 'w-4 h-4',
};

export const SvgSizeVariants = Object.values(SVG_SIZE);

export const CHECK_BOX_GAP: Record<GapType, string> = {
  [GAP['GAP_12']]: 'gap-x-3',
  [GAP['GAP_10']]: 'gap-x-2.5',
  [GAP['GAP_8']]: 'gap-x-2',
  [GAP['GAP_6']]: 'gap-x-1.5',
  [GAP['GAP_4']]: 'gap-x-1',
};

export const CheckBoxGapVariants = Object.values(CHECK_BOX_GAP);
