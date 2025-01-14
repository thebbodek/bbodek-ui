import { COLOR_THEME, COLOR_THEME_VARIANT } from '@/constants/theme';

export type ThemeColors =
  | 'white'
  | 'black'
  | 'gray-09'
  | 'gray-08'
  | 'gray-07'
  | 'gray-06'
  | 'gray-05'
  | 'gray-04'
  | 'gray-03'
  | 'gray-02'
  | 'gray-01'
  | 'gray-00'
  | 'primary-06'
  | 'primary-05'
  | 'primary-04'
  | 'primary-03'
  | 'primary-02'
  | 'primary-01'
  | 'primary-00'
  | 'error'
  | 'warning'
  | 'success'
  | 'transparent';

export type ThemeTypography =
  | 'head-01-regular'
  | 'head-01-medium'
  | 'head-01-bold'
  | 'head-02-regular'
  | 'head-02-medium'
  | 'head-02-bold'
  | 'subhead-01-regular'
  | 'subhead-01-medium'
  | 'subhead-01-bold'
  | 'subhead-02-regular'
  | 'subhead-02-medium'
  | 'subhead-02-bold'
  | 'body-01-regular'
  | 'body-01-medium'
  | 'body-01-bold'
  | 'body-02-regular'
  | 'body-02-medium'
  | 'body-02-bold'
  | 'body-03-regular'
  | 'body-03-medium'
  | 'body-03-bold';

export type ColorThemeType = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];

export type ColorThemeVariant =
  (typeof COLOR_THEME_VARIANT)[keyof typeof COLOR_THEME_VARIANT];
