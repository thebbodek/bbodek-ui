import { COLOR_THEME } from '@/constants/theme';
import { ColorThemeType } from '@/types';

export const CHIP_DELETE_BUTTON_STYLE: Record<ColorThemeType, string> = {
  [COLOR_THEME['PRIMARY']]: 'hover:brightness-90',
  [COLOR_THEME['PRIMARY_01']]: 'hover:brightness-90',
  [COLOR_THEME['PRIMARY_06']]: 'hover:brightness-75',
  [COLOR_THEME['SECONDARY']]: 'hover:brightness-90',
  [COLOR_THEME['ERROR']]: 'hover:brightness-75',
  [COLOR_THEME['WARNING']]: 'hover:brightness-75',
  [COLOR_THEME['SUCCESS']]: 'hover:brightness-75',
  [COLOR_THEME['GRAY']]: 'hover:brightness-90',
  [COLOR_THEME['WHITE']]: 'hover:brightness-90',
  [COLOR_THEME['INFO']]: 'hover:brightness-75',
  [COLOR_THEME['DARK']]: 'hover:brightness-75',
} as const;

export const CHIP_LABEL_STYLE: Record<ColorThemeType, string> = {
  [COLOR_THEME['PRIMARY']]: 'hover:brightness-110',
  [COLOR_THEME['PRIMARY_01']]: 'hover:brightness-95',
  [COLOR_THEME['PRIMARY_06']]: 'hover:brightness-150',
  [COLOR_THEME['SECONDARY']]: 'hover:brightness-95',
  [COLOR_THEME['ERROR']]: 'hover:brightness-95',
  [COLOR_THEME['WARNING']]: 'hover:brightness-90',
  [COLOR_THEME['SUCCESS']]: 'hover:brightness-90',
  [COLOR_THEME['GRAY']]: 'hover:brightness-90',
  [COLOR_THEME['WHITE']]: 'hover:brightness-95',
  [COLOR_THEME['INFO']]: 'hover:brightness-90',
  [COLOR_THEME['DARK']]: 'hover:brightness-150',
} as const;
