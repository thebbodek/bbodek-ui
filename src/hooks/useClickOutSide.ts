import { useRef } from 'react';
import useClickOutSideEffect from './effects/useClickOutSideEffect';

const useClickOutside = <T extends Element>(onClose?: () => void) => {
  const contentRef = useRef<T | null>(null);

  useClickOutSideEffect(contentRef, onClose);

  return { contentRef };
};

export default useClickOutside;
