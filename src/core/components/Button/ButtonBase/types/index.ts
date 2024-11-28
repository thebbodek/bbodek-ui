import { ButtonHTMLAttributes } from 'react';

import { ColorThemeType, ThemeColors, ThemeTypography } from '@/types';
import { GAP, ROUNDED, SIZE } from '../constants';

export type ThemeType = Extract<
  ThemeTypography,
  | 'body-01-regular'
  | 'body-01-medium'
  | 'body-01-bold'
  | 'body-02-regular'
  | 'body-02-medium'
  | 'body-02-bold'
  | 'body-03-regular'
  | 'body-03-medium'
  | 'body-03-bold'
>;

export type SizeType = (typeof SIZE)[keyof typeof SIZE];

export type RoundedType = (typeof ROUNDED)[keyof typeof ROUNDED];

export type BorderColorType = Extract<
  ThemeColors,
  'gray-04' | 'gray-03' | 'gray-02' | 'gray-01'
>;

export type GapType = (typeof GAP)[keyof typeof GAP];

export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorTheme?: ColorThemeType;
  theme?: ThemeType;
  color?: ThemeColors;
  backgroundColor?: ThemeColors;
  size: SizeType;
  gap?: GapType;
  rounded?: RoundedType;
  borderColor?: BorderColorType;
  hasIcon?: boolean;
}
