import { useRef } from "react";
import useEffectClickOutSide from "./useEffectClickOutSide";

const useClickOutside = <T extends Element>(onClose?: () => void) => {
  const contentRef = useRef<T | null>(null);

  useEffectClickOutSide(contentRef, onClose);

  return { contentRef };
};

export default useClickOutside;
