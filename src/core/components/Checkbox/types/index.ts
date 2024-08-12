import React from 'react';

import { GAP, SVG_SIZE } from '../constants';
import { TypographyProps } from '@/core/components/Typography/types';

export type SvgSizeType = (typeof SVG_SIZE)[keyof typeof SVG_SIZE];

export type GapType = (typeof GAP)[keyof typeof GAP];

export interface CheckboxProps
  extends Pick<TypographyProps, 'theme'>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  svgSize?: SvgSizeType;
  isCircle?: boolean;
  gap?: GapType;
}
