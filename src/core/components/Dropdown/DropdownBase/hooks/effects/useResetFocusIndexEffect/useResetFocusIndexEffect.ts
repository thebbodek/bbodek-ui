import { useEffect, useRef } from 'react';

import { UseResetFocusIndexEffectParams } from './types';

const useResetFocusIndexEffect = ({
  items,
  resetFocusIndex,
}: UseResetFocusIndexEffectParams) => {
  const prevItemsRef = useRef(items);

  useEffect(() => {
    if (!items) return;

    if (prevItemsRef.current !== items) {
      resetFocusIndex();
    }

    prevItemsRef.current = items;
  }, [items]);
};

export default useResetFocusIndexEffect;
