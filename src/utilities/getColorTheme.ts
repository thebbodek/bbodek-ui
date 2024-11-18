import {
  COLOR_THEME_VARIANT,
  COLOR_THEME_VARIANT_OPTIONS,
} from '@/constants/theme';
import { ColorThemeType } from '@/types';

export const getColorTheme = ({
  variant = COLOR_THEME_VARIANT['ALL'],
  colorTheme,
}: {
  colorTheme?: ColorThemeType;
  variant?: (typeof COLOR_THEME_VARIANT)[keyof typeof COLOR_THEME_VARIANT];
}) => {
  if (colorTheme) return colorTheme;

  const colorThemes = Object.values(COLOR_THEME_VARIANT_OPTIONS[variant]);
  const randomNum = Math.floor(Math.random() * colorThemes.length);

  return colorThemes[randomNum];
};
