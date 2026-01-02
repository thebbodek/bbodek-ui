import {
  CheckBoxColorTheme,
  CheckboxType,
  GapType,
  SvgSizeType,
} from '../types';
import { COLOR_THEME } from '@/constants/theme';
import { IconComponentProps } from '@/core/components/Icon/types';

export const SVG_SIZE = {
  SIZE_32: 'size-32',
  SIZE_24: 'size-24',
  SIZE_20: 'size-20',
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
  [SVG_SIZE['SIZE_32']]: 'text-[2rem]',
  [SVG_SIZE['SIZE_24']]: 'text-[1.5rem]',
  [SVG_SIZE['SIZE_20']]: 'text-[1.25rem]',
  [SVG_SIZE['SIZE_16']]: 'text-[1rem',
};

export const SvgSizeVariants = Object.values(SVG_SIZE);

export const CHECK_BOX_GAP: Record<GapType, string> = {
  [GAP['GAP_12']]: 'gap-x-3',
  [GAP['GAP_10']]: 'gap-x-2.5',
  [GAP['GAP_8']]: 'gap-x-2',
  [GAP['GAP_6']]: 'gap-x-1.5',
  [GAP['GAP_4']]: 'gap-x-1',
};

export const CHECKBOX_TYPE = {
  CHECK: 'check',
  HALF: 'half',
} as const;

export const CHECKBOX_ICON_KEY: Record<
  CheckboxType,
  IconComponentProps['iconKey']
> = {
  [CHECKBOX_TYPE['CHECK']]: 'check-square',
  [CHECKBOX_TYPE['HALF']]: 'minus-square',
} as const;

export const CHECKBOX_CIRCLE_ICON_KEY: Record<
  CheckboxType,
  IconComponentProps['iconKey']
> = {
  [CHECKBOX_TYPE['CHECK']]: 'check-circle',
  [CHECKBOX_TYPE['HALF']]: 'minus-circle',
} as const;

export const CHECKBOX_COLOR_THEME: Record<CheckBoxColorTheme, string> = {
  [COLOR_THEME['PRIMARY']]: 'peer-checked:text-primary-03',
  [COLOR_THEME['PRIMARY_01']]: 'peer-checked:text-primary-01',
  [COLOR_THEME['ERROR']]: 'peer-checked:text-error',
};

export const CheckBoxGapVariants = Object.values(CHECK_BOX_GAP);
