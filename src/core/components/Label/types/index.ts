import { ElementType, ReactNode } from 'react';

import { ColorThemeType } from '@/types';
import { SIZE } from '../constants';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';

export type SizeType = (typeof SIZE)[keyof typeof SIZE];

export interface LabelProps<T extends ElementType = 'div'> {
  label: ReactNode;
  element?: T;
  colorTheme?: ColorThemeType;
  size?: SizeType;
  icon?: ReactNode;
  rounded?: RoundedType;
}
