import { RefObject, useEffect } from 'react';

const useClickOutSideEffect = (
  ref: RefObject<Element>,
  onClose?: () => void,
  useClickOutsideEvent?: boolean,
) => {
  useEffect(() => {
    if (!useClickOutsideEvent) return;

    const onClickOutSide = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      onClose?.();
    };

    document.addEventListener('mousedown', onClickOutSide);

    return () => document.removeEventListener('mousedown', onClickOutSide);
  }, [ref.current]);
};

export default useClickOutSideEffect;
