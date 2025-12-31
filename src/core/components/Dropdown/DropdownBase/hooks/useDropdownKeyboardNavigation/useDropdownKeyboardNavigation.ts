import { KeyboardEvent, useRef, useState } from 'react';

import { KEYBOARD_DOWN_KEY } from '@/core/components/Dropdown/DropdownBase/constants';
import useResetFocusIndexEffect from '@/core/components/Dropdown/DropdownBase/hooks/effects/useResetFocusIndexEffect/useResetFocusIndexEffect';
import {
  ItemRefsType,
  SetItemRefParams,
  UseDropdownKeyboardNavigationParams,
} from '@/core/components/Dropdown/DropdownBase/hooks/useDropdownKeyboardNavigation/types';
import { KeyboardDownType } from '@/core/components/Dropdown/DropdownBase/types';

const useDropdownKeyboardNavigation = ({
  items,
}: UseDropdownKeyboardNavigationParams) => {
  const [focusIndex, setFocusIndex] = useState(-1);

  const isComposingRef = useRef(false);
  const itemRefs = useRef<Array<ItemRefsType>>([]);

  const itemsLength = items.length;

  useResetFocusIndexEffect({
    items,
    resetFocusIndex: () => setFocusIndex(-1),
  });

  const isKeyboardDownKey = (key: string): key is KeyboardDownType =>
    Object.values(KEYBOARD_DOWN_KEY).includes(key as KeyboardDownType);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!itemsLength || isComposingRef.current) return;

    if (isKeyboardDownKey(e.key)) {
      e.preventDefault();

      switch (e.key) {
        case KEYBOARD_DOWN_KEY.ARROW_DOWN: {
          setFocusIndex((prev) => {
            if (prev === -1 || prev >= itemsLength - 1) return 0;

            return prev + 1;
          });

          break;
        }

        case KEYBOARD_DOWN_KEY.ARROW_UP: {
          setFocusIndex((prev) => {
            if (prev <= 0) return itemsLength - 1;

            return prev - 1;
          });

          break;
        }

        case KEYBOARD_DOWN_KEY.ENTER: {
          if (focusIndex >= 0) {
            itemRefs.current[focusIndex]?.click();
          }

          break;
        }
      }
    }
  };

  const onCompositionStart = () => {
    isComposingRef.current = true;
  };

  const onCompositionEnd = () => {
    isComposingRef.current = false;
  };

  const setItemRef = ({ element, index }: SetItemRefParams) => {
    itemRefs.current[index] = element;
  };

  return {
    focusIndex,
    setItemRef,
    onKeyDown,
    onCompositionStart,
    onCompositionEnd,
  };
};

export default useDropdownKeyboardNavigation;
