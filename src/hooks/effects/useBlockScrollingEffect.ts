import { useEffect } from "react";

export const useBlockScrollingEffect = (deps: boolean) => {
  useEffect(() => {
    if (deps) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [deps]);
};
