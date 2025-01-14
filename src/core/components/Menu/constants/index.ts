import { LIGHT_COLOR_THEME } from '@/constants/theme';
import { MenuItemColorTheme } from '@/core/components/Menu/types';

export const MENU_ITEM_THEME: Record<MenuItemColorTheme, string> = {
  [LIGHT_COLOR_THEME['ERROR']]: 'text-rose-600 hover:bg-[#FFEDEF]',
  [LIGHT_COLOR_THEME['SECONDARY']]: 'hover:bg-gray-00 hover:text-primary-03',
} as const;
