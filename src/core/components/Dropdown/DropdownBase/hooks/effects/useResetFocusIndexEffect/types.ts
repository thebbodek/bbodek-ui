import { DropdownItemsProps } from '@/core/components/Dropdown/DropdownBase/types';

export interface UseResetFocusIndexEffectParams extends Pick<
  DropdownItemsProps,
  'items'
> {
  resetFocusIndex: () => void;
}
