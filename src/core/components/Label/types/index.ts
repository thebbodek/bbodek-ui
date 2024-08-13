import { ElementType, HTMLAttributes, ReactNode } from 'react';

import { ColorThemeType } from '@/types';
import { SIZE } from '../constants';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';

export type SizeType = (typeof SIZE)[keyof typeof SIZE];

export interface LabelProps<T extends ElementType = 'div'>
  extends Pick<HTMLAttributes<T>, 'className' | 'onClick' | 'title'> {
  label: ReactNode;
  element?: T;
  colorTheme?: ColorThemeType;
  size?: SizeType;
  icon?: ReactNode;
  rounded?: RoundedType;
}
