import { COLOR_THEME } from '@/constants/theme';
import { ColorThemeType } from '@/types';

export const ARROW_HEIGHT = 7;

export const FILL_COLOR_THEME_STYLES: Record<ColorThemeType, string> = {
  [COLOR_THEME['PRIMARY']]: 'fill-primary-03',
  [COLOR_THEME['PRIMARY_06']]: 'fill-primary-06',
  [COLOR_THEME['SECONDARY']]: 'fill-primary-00',
  [COLOR_THEME['ERROR']]: 'fill-[#FFEDEF]',
  [COLOR_THEME['WARNING']]: 'fill-[#FEF6DB]',
  [COLOR_THEME['SUCCESS']]: 'fill-[#E7FCEE]',
  [COLOR_THEME['GRAY']]: 'fill-gray-02',
  [COLOR_THEME['WHITE']]: 'fill-white',
  [COLOR_THEME['DARK']]: 'fill-gray-600',
  [COLOR_THEME['INFO']]: 'fill-[#F8F5FF]',
};
