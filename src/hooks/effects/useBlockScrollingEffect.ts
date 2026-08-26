import { useEffect } from 'react';

export const useBlockScrollingEffect = (deps: boolean) => {
  useEffect(() => {
    const { classList } = document.body;

    if (deps) {
      classList.add('overflow-hidden');
    } else {
      classList.remove('overflow-hidden');
    }

    return () => classList.remove('overflow-hidden');
  }, [deps]);
};
