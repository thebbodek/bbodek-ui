import { ColorThemeType } from '@/types';

export const COLOR_THEME = {
  PRIMARY: 'primary',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  SECONDARY: 'secondary',
  GRAY: 'gray',
  WHITE: 'white',
} as const;

export const COLOR_THEME_STYLES: Record<ColorThemeType, string> = {
  [COLOR_THEME['PRIMARY']]: 'bg-primary-03 text-white',
  [COLOR_THEME['SECONDARY']]: 'text-primary-03 bg-primary-00',
  [COLOR_THEME['ERROR']]: 'text-rose-600 bg-rose-300 bg-opacity-20',
  [COLOR_THEME['WARNING']]: 'text-amber-600 bg-amber-300 bg-opacity-20',
  [COLOR_THEME['SUCCESS']]: 'text-green-600 bg-green-300 bg-opacity-20',
  [COLOR_THEME['GRAY']]: 'text-gray-07 bg-gray-02',
  [COLOR_THEME['WHITE']]: 'text-gray-06 bg-white border border-gray-03',
};

export const colorThemeOptions = Object.values(COLOR_THEME).map(
  (theme) => theme,
);
