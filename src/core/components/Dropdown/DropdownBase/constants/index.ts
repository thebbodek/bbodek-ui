import { DropdownItemStateValue } from '@/core/components/Dropdown/DropdownBase/types';

export const DROPDOWN_ITEM_STATE = {
  FOCUS: 'focus',
  CHECKED: 'checked',
  DEFAULT: 'default',
  DISABLED_FOCUS: 'disabled_focus',
  DISABLED: 'disabled',
} as const;

export const DROPDOWN_ITEM_BASE_STYLE = 'w-full rounded-md p-2';

export const DROPDOWN_ITEM_STYLES: Record<DropdownItemStateValue, string> = {
  [DROPDOWN_ITEM_STATE.FOCUS]: 'bg-gray-00 text-primary-03 cursor-pointer',
  [DROPDOWN_ITEM_STATE.CHECKED]: 'text-primary-03 font-medium cursor-pointer',
  [DROPDOWN_ITEM_STATE.DEFAULT]: 'text-gray-07 cursor-pointer',
  [DROPDOWN_ITEM_STATE.DISABLED_FOCUS]: 'text-gray-05 cursor-not-allowed',
  [DROPDOWN_ITEM_STATE.DISABLED]: 'text-gray-07 cursor-not-allowed',
} as const;

export const KEYBOARD_DOWN_KEY = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
} as const;
