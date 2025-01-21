import { ColorThemeType } from '@/types';

export const COLOR_THEME_VARIANT = {
  LIGHT: 'light',
  ALL: 'all',
} as const;

export const LIGHT_COLOR_THEME = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  SECONDARY: 'secondary',
  INFO: 'info',
} as const;

export const COLOR_THEME = {
  ...LIGHT_COLOR_THEME,
  PRIMARY: 'primary',
  PRIMARY_06: 'primary_06',
  GRAY: 'gray',
  WHITE: 'white',
  DARK: 'dark',
} as const;

export const COLOR_THEME_VARIANT_OPTIONS = {
  [COLOR_THEME_VARIANT['LIGHT']]: LIGHT_COLOR_THEME,
  [COLOR_THEME_VARIANT['ALL']]: COLOR_THEME,
};

export const COLOR_THEME_STYLES: Record<ColorThemeType, string> = {
  [COLOR_THEME['PRIMARY']]: 'bg-primary-03 text-white',
  [COLOR_THEME['PRIMARY_06']]: 'bg-primary-06 text-white',
  [COLOR_THEME['SECONDARY']]: 'text-primary-03 bg-primary-00',
  [COLOR_THEME['ERROR']]: 'text-rose-600 bg-[#FFEDEF]',
  [COLOR_THEME['WARNING']]: 'text-amber-600 bg-[#FEF6DB]',
  [COLOR_THEME['SUCCESS']]: 'text-green-600 bg-[#E7FCEE]',
  [COLOR_THEME['GRAY']]: 'text-gray-07 bg-gray-02',
  [COLOR_THEME['WHITE']]: 'text-gray-06 bg-white border border-gray-03',
  [COLOR_THEME['INFO']]: 'text-[#7239EA] bg-[#F8F5FF]',
  [COLOR_THEME['DARK']]: 'text-white bg-gray-600',
};

export const colorThemeOptions = Object.values(COLOR_THEME).map(
  (theme) => theme,
);
