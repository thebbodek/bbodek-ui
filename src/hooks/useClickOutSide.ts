import { useRef } from 'react';

import useClickOutSideEffect from './effects/useClickOutSideEffect';

const useClickOutside = <T extends Element>(
  onClose?: (e: MouseEvent) => void,
  useClickOutsideEvent?: boolean,
) => {
  const contentRef = useRef<T | null>(null);

  useClickOutSideEffect(contentRef, onClose, useClickOutsideEvent);

  return { contentRef };
};

export default useClickOutside;
