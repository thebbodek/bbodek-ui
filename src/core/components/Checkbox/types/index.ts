import { InputHTMLAttributes } from 'react';

import { IconComponentProps } from '@/core/components/Icon/types';
import { TypographyProps } from '@/core/components/Typography/types';
import { ColorThemeType } from '@/types';
import { CHECKBOX_TYPE, GAP, SVG_SIZE } from '../constants';

export type SvgSizeType = (typeof SVG_SIZE)[keyof typeof SVG_SIZE];

export type GapType = (typeof GAP)[keyof typeof GAP];

export type CheckboxType = (typeof CHECKBOX_TYPE)[keyof typeof CHECKBOX_TYPE];

export type CheckBoxColorTheme = Extract<
  ColorThemeType,
  'primary' | 'error' | 'primary_01'
>;

export interface CheckboxProps
  extends Pick<TypographyProps, 'theme'>,
    InputHTMLAttributes<HTMLInputElement>,
    Partial<Pick<IconComponentProps, 'iconKey'>> {
  label?: string;
  svgSize?: SvgSizeType;
  isCircle?: boolean;
  gap?: GapType;
  type?: CheckboxType;
  colorTheme?: CheckBoxColorTheme;
}
