import { ElementType, HTMLAttributes } from 'react';

import { ROUNDED, SHADOW } from '../constants';
import { ButtonProps } from '@/core/components/Button/Button/types';

export interface SectionProps<T extends ElementType>
  extends
    Omit<HTMLAttributes<HTMLElement>, 'color'>,
    Pick<
      ButtonProps,
      'color' | 'colorTheme' | 'backgroundColor' | 'borderColor'
    > {
  rounded?: RoundedType;
  shadow?: ShadowType;
  hasRounded?: boolean;
  hasBorder?: boolean;
  hasShadow?: boolean;
  element?: T;
}

export type RoundedType = (typeof ROUNDED)[keyof typeof ROUNDED];

export type ShadowType = (typeof SHADOW)[keyof typeof SHADOW];
