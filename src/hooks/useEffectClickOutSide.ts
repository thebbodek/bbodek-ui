import { RefObject, useEffect } from "react";

const useEffectClickOutSide = (ref: RefObject<Element>, onClose?: () => void) => {
  useEffect(() => {
    const onClickOutSide = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      onClose?.();
    };

    document.addEventListener("mousedown", onClickOutSide);

    return () => document.removeEventListener("mousedown", onClickOutSide);

  }, [ ref.current, onClose ]);
};

export default useEffectClickOutSide;
