import { ThemeColors, ThemeTypography } from '@/types';
import { InputHTMLAttributes } from 'react';

export interface FormLabelProps {
  labelTheme?: ThemeTypography;
  labelColor?: ThemeColors;
  label: string;
  required?: InputHTMLAttributes<HTMLInputElement>['required'];
  labelSubText?: string;
}
