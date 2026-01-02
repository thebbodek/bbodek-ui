import { ThemeTypography } from '@/types';

export interface GeneralTabItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  theme?: ThemeTypography;
}
