import { ElementType, HTMLAttributes, ReactNode } from 'react';

import { SIZE } from '../constants';
import { ButtonProps } from '@/core/components/Button/Button/types';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';
import { ColorThemeType } from '@/types';

export type SizeType = (typeof SIZE)[keyof typeof SIZE];

export interface LabelProps<T extends ElementType = 'div'>
  extends
    Pick<HTMLAttributes<T>, 'className' | 'onClick' | 'title'>,
    Pick<ButtonProps, 'theme' | 'color' | 'backgroundColor' | 'borderColor'> {
  label: ReactNode;
  element?: T;
  colorTheme?: ColorThemeType;
  size?: SizeType;
  icon?: ReactNode;
  rounded?: RoundedType;
}
