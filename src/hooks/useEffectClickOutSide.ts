import { RefObject, useEffect } from "react";

const useEffectClickOutSide = (ref: RefObject<Element>, onClose?: () => void) => {
  useEffect(() => {
    const onClickOutSide = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      onClose?.();
    };

    document.addEventListener("click", onClickOutSide);

    return () => document.removeEventListener("click", onClickOutSide);

  }, [ ref.current, onClose ]);
};

export default useEffectClickOutSide;
