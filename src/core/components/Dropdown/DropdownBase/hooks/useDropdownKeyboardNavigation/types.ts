import { DropdownItemsProps } from '@/core/components/Dropdown/DropdownBase/types';

export interface UseDropdownKeyboardNavigationParams extends Pick<
  DropdownItemsProps,
  'items'
> {}

export type ItemRefsType = HTMLDivElement | null;
export interface SetItemRefParams {
  element: ItemRefsType;
  index: number;
}
