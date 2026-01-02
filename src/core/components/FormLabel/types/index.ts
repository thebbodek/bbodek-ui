import { InputHTMLAttributes } from 'react';

import { ThemeColors, ThemeTypography } from '@/types';

export interface FormLabelProps {
  labelTheme?: ThemeTypography;
  labelColor?: ThemeColors;
  label: string;
  required?: InputHTMLAttributes<HTMLInputElement>['required'];
  labelSubText?: string;
}
