import { RefObject } from 'react';

export interface UseScrollToFocusedItemEffectParams {
  focusIndex: number;
  listRef: RefObject<HTMLUListElement | null>;
  itemFullHeight: number;
}
