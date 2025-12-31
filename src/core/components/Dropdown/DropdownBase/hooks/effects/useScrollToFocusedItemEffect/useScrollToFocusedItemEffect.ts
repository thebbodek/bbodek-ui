import { useEffect } from 'react';

import { UseScrollToFocusedItemEffectParams } from './types';

const useScrollToFocusedItemEffect = ({
  focusIndex,
  listRef,
  itemFullHeight,
}: UseScrollToFocusedItemEffectParams) => {
  useEffect(() => {
    const list = listRef.current;
    if (focusIndex < 0 || !list) return;

    const itemTop = focusIndex * itemFullHeight;
    const itemBottom = itemTop + itemFullHeight;

    const viewTop = list.scrollTop;
    const viewBottom = viewTop + list.clientHeight;

    if (itemTop < viewTop) {
      list.scrollTo({
        top: itemTop,
        behavior: 'smooth',
      });
    }

    if (itemBottom > viewBottom) {
      list.scrollTo({
        top: itemBottom - list.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [focusIndex, itemFullHeight]);
};

export default useScrollToFocusedItemEffect;
