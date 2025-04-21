import { RefObject, useEffect } from 'react';

const useClickOutSideEffect = (
  ref: RefObject<Element | null>,
  onClose?: (e: MouseEvent) => void,
  useClickOutsideEvent?: boolean,
) => {
  useEffect(() => {
    const onClickOutSide = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      onClose?.(e);
    };

    if (useClickOutsideEvent) {
      document.addEventListener('mousedown', onClickOutSide);
    } else {
      document.removeEventListener('mousedown', onClickOutSide);
    }

    return () => document.removeEventListener('mousedown', onClickOutSide);
  }, [ref.current, useClickOutsideEvent]);
};

export default useClickOutSideEffect;
